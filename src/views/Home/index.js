import React, { Component } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { getUserInfo, isRequesting } from "../../reducers/Home/selectors";
import { setUserInfo, setIsRequesting } from "../../reducers/Home/actions";
import HomeView from "./HomeView";
import ProjectsView from "./ProjectsView";

class Home extends Component {
  state = {
    user_info: {
      user_name: "User Name",
      shots: 10,
      followers: 100,
      following: 20,
      lightning: 10,
      quantity: 30,
      active_project: [
        {
          weeks: 2,
          budget: "200",
          name: "Image Recognition for Perfect Shelf Execution",
          desc: "ShelfWatch analyses images of retail shelf displays, and provides corrective feedback to help CPG manufacturers and retailers achieve perfect in-store execution.",
        },
        {
          weeks: 2,
          budget: "200",
          name: "Image Recognition for Perfect Shelf Execution",
          desc: "ShelfWatch analyses images of retail shelf displays, and provides corrective feedback to help CPG manufacturers and retailers achieve perfect in-store execution.",
        },
        {
          weeks: 2,
          budget: "200",
          name: "Image Recognition for Perfect Shelf Execution",
          desc: "ShelfWatch analyses images of retail shelf displays, and provides corrective feedback to help CPG manufacturers and retailers achieve perfect in-store execution.",
        },
      ],
    },
  };

  componentDidMount() {
    this.props.setIsRequesting(true);

    // set data from api here
    this.props.setUserInfo(this.state.user_info);
    this.props.setIsRequesting(false);
  }

  render() {
    const { isRequesting, user_info } = this.props;
    return (
      <div>
        {isRequesting ? (
          <div>Loading...</div>
        ) : (
          <div>
            <HomeView user_info={user_info} />
            <ProjectsView active_project={user_info.active_project} />
          </div>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  setUserInfo: func.isRequired,
  setIsRequesting: func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user_info: getUserInfo(),
  isRequesting: isRequesting(),
});

export default connect(mapStateToProps, { setUserInfo, setIsRequesting })(
  withRouter(Home)
);
