import { SET_IMAGE_INFO, IS_REQUESTING } from "./constants";

/**
 * Set User Info
 *
 * @param {Object} data
 */
export const setImageInfo = (data) => {
  return { type: SET_IMAGE_INFO, data };
};

/**
 * Set Is Requesting
 *
 * @param {Boolean} data
 */
export const setIsRequesting = (data) => {
  return { type: IS_REQUESTING, data };
};
