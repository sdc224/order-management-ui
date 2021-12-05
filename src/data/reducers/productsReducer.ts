import { PayloadAction } from "typesafe-actions";
import {
	Product,
	ProductsActionTypes,
	ProductsState
} from "../types/productsTypes";

export const initialState: ProductsState = {
	productsList: []
};

const productReducer = (
	state = initialState,
	action: PayloadAction<string, Product>
): ProductsState => {
	switch (action.type) {
		case ProductsActionTypes.ADD_PRODUCT:
			return { productsList: [...state.productsList, action.payload] };

		case ProductsActionTypes.REMOVE_PRODUCT:
			return {
				productsList: state.productsList.filter(
					(p) =>
						p.id === action.payload.id &&
						p.name === action.payload.name
				)
			};

		default:
			return state;
	}
};

export default productReducer;
