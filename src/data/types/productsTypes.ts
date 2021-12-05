export const ProductsActionTypes = {
	FETCH_PRODUCT: "@@product/FETCH_PRODUCT",
	FETCH_PRODUCT_ERROR: "@@product/FETCH_PRODUCT_ERROR",
	ADD_PRODUCT: "@@product/ADD_PRODUCT",
	REMOVE_PRODUCT: "@@product/REMOVE_PRODUCT",
	SET_PRODUCT_LIST: "@@product/SET_PRODUCT_LIST"
};

export interface Product {
	id: string;
	name: string;
	description?: string;
	productType?: string;
	price?: number;
}

export interface ProductsState {
	loading: boolean;
	error?: string;
	productsList: Product[];
}

export interface ProductsAwareState {
	products: ProductsState;
}
