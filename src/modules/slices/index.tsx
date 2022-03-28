import { combineReducers } from "redux";
import sample from "./Sample";

export type RootState = ReturnType<typeof rootReducer>;
declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}

const rootReducer = combineReducers({
  sample,
});

export default rootReducer;
