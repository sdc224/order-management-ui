import { CartState } from "./cartTypes";
import { ProductsState } from "./productsTypes";
import { ThemeState } from "./themeTypes";

export default interface ApplicationState {
	theme: ThemeState;
	products: ProductsState;
	cart: CartState;
}
