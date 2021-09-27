import { createSelector } from "reselect";

const HomeReducer = () => (state) => state.get("home");

/**
 * Get User Info
 *
 * @return {Object}
 */
export const getUserInfo = () =>
  createSelector(HomeReducer(), (state) => state.get("user_info").toJS());

/**
 * Get is requesting
 *
 * @return {Boolean}
 */
export const isRequesting = () =>
  createSelector(HomeReducer(), (state) => state.get("isRequesting"));
