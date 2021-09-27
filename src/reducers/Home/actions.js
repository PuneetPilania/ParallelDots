import { SET_USER_INFO, IS_REQUESTING } from "./constants";

/**
 * Set User Info
 *
 * @param {Object} data
 */
export const setUserInfo = (data) => {
  return { type: SET_USER_INFO, data };
};

/**
 * Set Is Requesting
 *
 * @param {Boolean} data
 */
export const setIsRequesting = (data) => {
  return { type: IS_REQUESTING, data };
};
