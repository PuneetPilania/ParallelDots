import { combineReducers } from "redux-immutable";

import HomeReducer from "./Home/reducer";
// import ImageReducer from "./Image/reducer";

const reducers = combineReducers({
  home: HomeReducer,
  // image: ImageReducer,
});

export default reducers;
