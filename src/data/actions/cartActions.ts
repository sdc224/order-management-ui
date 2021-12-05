import { action } from "typesafe-actions";
import {
	CartActionTypes,
	CartProduct,
	CartProductQuantity
} from "../types/cartTypes";

export const addProduct = (value: CartProduct) =>
	action(CartActionTypes.ADD_PRODUCT, value);

export const removeProduct = (value: CartProduct) =>
	action(CartActionTypes.REMOVE_PRODUCT, value);

export const incrementProduct = (value: CartProductQuantity) =>
	action(CartActionTypes.INCREMENT_PRODUCT, value);

export const decrementProduct = (value: CartProductQuantity) =>
	action(CartActionTypes.DECREMENT_PRODUCT, value);
