import { Product } from "./productsTypes";

export const CartActionTypes = {
	FETCH_CART_PRODUCT: "@@cart/FETCH_CART_PRODUCT",
	FETCH_CART_PRODUCT_ERROR: "@@cart/FETCH_CART_PRODUCT_ERROR",
	SET_CART_PRODUCT: "@@cart/SET_CART_PRODUCT",
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
	loading: boolean;
	productsList: any[];
	length: number;
	error?: string;
	total: number;
}

export interface CartAwareState {
	cart: CartState;
}
