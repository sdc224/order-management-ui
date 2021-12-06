import { PayloadAction } from "typesafe-actions";
import { CartActionTypes, CartProduct, CartState } from "../types/cartTypes";

export const initialState: CartState = {
	loading: false,
	productsList: [],
	length: 0,
	total: 0
};

const cartReducer = (
	state = initialState,
	action: PayloadAction<string, any>
): CartState => {
	if (action.type === CartActionTypes.FETCH_CART_PRODUCT) {
		return { ...state, loading: true, error: undefined };
	}

	if (action.type === CartActionTypes.FETCH_CART_PRODUCT_ERROR) {
		return { ...state, loading: false, error: action.payload as string };
	}

	if (action.type === CartActionTypes.ADD_PRODUCT) {
		let length = state.length;
		let productsList = [
			...state.productsList,
			action.payload as CartProduct
		];

		const quantity = productsList.reduce(
			(acc, curr) => acc + curr?.quantity!,
			0
		);

		if (productsList.length + quantity !== length)
			length = productsList.length + quantity;

		return { ...state, productsList, length };
	}

	if (action.type === CartActionTypes.REMOVE_PRODUCT) {
		let length = state.length;

		const productsList = state.productsList.filter(
			(p) =>
				p.id === (action.payload as CartProduct).id &&
				p.name === (action.payload as CartProduct).name
		);

		const quantity = productsList.reduce(
			(acc, curr) => acc + curr?.quantity!,
			0
		);

		if (productsList.length + quantity !== length)
			length = productsList.length + quantity;

		return { ...state, productsList, length };
	}

	if (
		action.type === CartActionTypes.INCREMENT_PRODUCT ||
		action.type === CartActionTypes.DECREMENT_PRODUCT ||
		action.type === CartActionTypes.SET_CART_PRODUCT
	) {
		return {
			...state,
			loading: false,
			error: undefined,
			productsList: action.payload.cartProduct,
			total: action.payload.total
		};
	}

	return state;
};

export default cartReducer;
