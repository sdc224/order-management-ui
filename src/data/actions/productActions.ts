import { action } from "typesafe-actions";
import { Product, ProductsActionTypes } from "../types/productsTypes";

export const fetchProduct = () => action(ProductsActionTypes.FETCH_PRODUCT);

export const fetchProductError = (value: string) =>
	action(ProductsActionTypes.FETCH_PRODUCT_ERROR, value);

export const addProduct = (value: Product) =>
	action(ProductsActionTypes.ADD_PRODUCT, value);

export const removeProduct = (value: Product) =>
	action(ProductsActionTypes.REMOVE_PRODUCT, value);

export const setProductList = (value: Product[]) =>
	action(ProductsActionTypes.SET_PRODUCT_LIST, value);
