import React, { Component } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { getUserInfo, isRequesting } from "../../reducers/Home/selectors";
import { setUserInfo, setIsRequesting } from "../../reducers/Home/actions";
import HomeView from "./HomeView";

class Home extends Component {
  state = {
    user_info: {
      user_name: "ABC",
      shots: 10,
      followers: 100,
      following: 20,
      lightning: 10,
      quantity: 30,
      active_project: [{ weeks: 2, budget: "$200" }],
    },
  };

  componentDidMount() {
    this.props.setIsRequesting(true);

    // set data from api
    this.props.setUserInfo(this.state.user_info);
    this.props.setIsRequesting(false);
  }

  render() {
    const { isRequesting } = this.props;
    return (
      <div>
        {isRequesting ? (
          <div>Loading...</div>
        ) : (
          <div>
            <HomeView user_info={this.props.user_info} />
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
