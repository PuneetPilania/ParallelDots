import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import ShelfImage from "../../assets/shelf_image.jpeg";
import { getImageInfo, isRequesting } from "../../reducers/Image/selectors";
import { setImageInfo, setIsRequesting } from "../../reducers/Image/actions";
import Switch from "@mui/material/Switch";
import "./imageView.css";

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
    this.props.setIsRequesting(true);

    // set data from api here
    this.props.setImageInfo(this.state.imageRender);
    this.props.setIsRequesting(false);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.image_info !== this.props.image_info) {
      this.loadImage();
    }
  }

  drawRect = () => {
    const { mappings } = this.props.image_info;

    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    this.setState({
      renderStatus: !this.state.renderStatus,
    });
    mappings.map((item) => {
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
    const { imageSrc } = this.props.image_info;

    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 400;

    var imgObj = new Image();
    imgObj.src = imageSrc;
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
      <div className="image__main">
        <canvas ref={canvasRef}></canvas>
        <Switch checked={renderStatus} onChange={() => this.handleShow()} />
      </div>
    );
  }
}

Image1.propTypes = {
  setImageInfo: func.isRequired,
  setIsRequesting: func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  image_info: getImageInfo(),
  isRequesting: isRequesting(),
});

export default connect(mapStateToProps, { setImageInfo, setIsRequesting })(
  withRouter(Image1)
);
