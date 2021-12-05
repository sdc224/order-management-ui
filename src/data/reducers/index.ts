import { combineReducers } from "redux";
import ApplicationState from "../types";
import cartReducer from "./cartReducer";
import productReducer from "./productsReducer";
import searchReducer from "./searchReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers<ApplicationState>({
	theme: themeReducer,
	products: productReducer,
	cart: cartReducer,
	search: searchReducer
});

export default rootReducer;
