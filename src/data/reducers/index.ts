import { combineReducers } from "redux";
import ApplicationState from "../types";
import cartReducer from "./cartReducer";
import productReducer from "./productsReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers<ApplicationState>({
	theme: themeReducer,
	products: productReducer,
	cart: cartReducer
});

export default rootReducer;
