import { createSelector } from "reselect";

const ImageReducer = () => (state) => state.get("image");

/**
 * Get User Info
 *
 * @return {Object}
 */
export const getImageInfo = () =>
  createSelector(ImageReducer(), (state) => state.get("imageData").toJS());

/**
 * Get is requesting
 *
 * @return {Boolean}
 */
export const isRequesting = () =>
  createSelector(ImageReducer(), (state) => state.get("isRequesting"));
