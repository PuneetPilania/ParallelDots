import { fromJS } from "immutable";
import { SET_USER_INFO, IS_REQUESTING } from "./constants";

const initialState = fromJS({
  user_info: {},
  isRequesting: false,
});

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return state.set("user_info", fromJS(action.data));

    case IS_REQUESTING:
      return state.set("isRequesting", action.data);

    default:
      return state;
  }
}

export default HomeReducer;
