import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";
import taskDetailReducer from "./taskDetailReducer";

const reducers = combineReducers({
  dataReducer,
  loadingReducer,
  errorReducer,
  taskDetailReducer
});

export default reducers;
