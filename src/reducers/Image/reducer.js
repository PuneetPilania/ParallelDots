import { fromJS } from "immutable";
import { SET_IMAGE_INFO, IS_REQUESTING } from "./constants";

const initialState = fromJS({
  imageData: {},
  isRequesting: false,
});

/**
 * Define the reducer with actions
 *
 * @param {Object} state
 * @param {Object} action
 */
function ImageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGE_INFO:
      return state.set("imageData", fromJS(action.data));

    case IS_REQUESTING:
      return state.set("isRequesting", action.data);

    default:
      return state;
  }
}

export default ImageReducer;
