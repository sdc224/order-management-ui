import { PayloadAction } from "typesafe-actions";
import {
	Product,
	ProductsActionTypes,
	ProductsState
} from "../types/productsTypes";

export const initialState: ProductsState = {
	loading: false,
	productsList: []
};

const productReducer = (
	state = initialState,
	action: PayloadAction<string, any>
): ProductsState => {
	switch (action.type) {
		case ProductsActionTypes.ADD_PRODUCT:
			return {
				...state,
				productsList: [...state.productsList, action.payload as Product]
			};

		case ProductsActionTypes.REMOVE_PRODUCT:
			return {
				...state,
				productsList: state.productsList.filter(
					(p) =>
						p.id === (action.payload as Product).id &&
						p.name === (action.payload as Product).name
				)
			};

		case ProductsActionTypes.FETCH_PRODUCT:
			return {
				...state,
				productsList: [],
				loading: true,
				error: undefined
			};

		case ProductsActionTypes.SET_PRODUCT_LIST:
			const productsList = [];
			if (!Array.isArray(action.payload))
				productsList.push(action.payload as Product);
			else productsList.push(...(action.payload as Product[]));

			return { ...state, productsList, loading: false, error: undefined };

		case ProductsActionTypes.FETCH_PRODUCT_ERROR:
			return {
				...state,
				productsList: [],
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export default productReducer;
