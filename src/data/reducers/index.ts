import { combineReducers } from "redux";
import ApplicationState from "../types";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers<ApplicationState>({
	theme: themeReducer
});

export default rootReducer;
