import { Product } from "./productsTypes";

export const CartActionTypes = {
	ADD_PRODUCT: "@@cart/ADD_PRODUCT",
	INCREMENT_PRODUCT: "@@cart/INCREMENT_PRODUCT",
	REMOVE_PRODUCT: "@@cart/REMOVE_PRODUCT",
	DECREMENT_PRODUCT: "@@cart/DECREMENT_PRODUCT",
	GET_CART_LENGTH: "@@cart/GET_CART_LENGTH"
};

export interface CartProduct extends Product {
	quantity?: number;
}

export interface CartProductQuantity {
	cartProduct: CartProduct;
	value: number;
}

export interface CartState {
	productsList: CartProduct[];
	length: number;
}

export interface CartAwareState {
	cart: CartState;
}
