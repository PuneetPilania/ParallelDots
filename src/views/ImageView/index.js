import React, { Component, createRef } from "react";
import ShelfImage from "../../assets/shelf_image.jpeg";

const canvasRef = createRef();

class Image1 extends Component {
  state = {
    renderStatus: false,
    imageRender: {
      imageSrc: ShelfImage,
      mappings: [
        [135, 143, 55, 115],
        [230, 153, 42, 105],
        [375, 143, 55, 115],
        [535, 143, 50, 115],
        [190, 288, 55, 110],
        [350, 293, 55, 105],
        [515, 293, 33, 105],
      ],
    },
  };

  componentDidMount() {
    this.loadImage();
  }

  drawRect = () => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    this.setState({
      renderStatus: !this.state.renderStatus,
    });
    this.state.imageRender.mappings.map((item) => {
      if (this.state.renderStatus) {
        this.loadImage();
        return true;
      } else {
        return ctx.strokeRect(item[0], item[1], item[2], item[3]);
      }
    });
    ctx.stroke();
  };

  loadImage() {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 400;

    var imgObj = new Image();
    imgObj.src = this.state.imageRender.imageSrc;
    imgObj.onload = function () {
      let w = canvas.width;
      let nw = imgObj.naturalWidth;
      let nh = imgObj.naturalHeight;
      let aspect = nw / nh;
      let h = w / aspect;
      canvas.height = h;
      ctx.drawImage(imgObj, 0, 0, w, h);
    };

    // canvas.addEventListener("click", this.drawRect);
  }

  handleShow = () => {
    this.drawRect();
  };

  render() {
    const { renderStatus } = this.state;
    return (
      <>
        <canvas ref={canvasRef}></canvas>
        <button onClick={() => this.handleShow()}>
          {renderStatus ? <>Hide</> : <>Show</>}
        </button>
      </>
    );
  }
}
export default Image1;
