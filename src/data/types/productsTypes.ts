export const ProductsActionTypes = {
	ADD_PRODUCT: "@@product/ADD_PRODUCT",
	REMOVE_PRODUCT: "@@product/REMOVE_PRODUCT"
};

export interface Product {
	id: string;
	name: string;
	description?: string;
	productType?: string;
	price?: number;
}

export interface ProductsState {
	productsList: Product[];
}

export interface ProductsAwareState {
	products: ProductsState;
}
