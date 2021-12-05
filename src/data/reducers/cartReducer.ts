import { PayloadAction } from "typesafe-actions";
import {
	CartActionTypes,
	CartProduct,
	CartProductQuantity,
	CartState
} from "../types/cartTypes";

export const initialState: CartState = {
	productsList: [],
	length: 0
};

const cartReducer = (
	state = initialState,
	action: PayloadAction<string, any>
): CartState => {
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
	} else if (action.type === CartActionTypes.REMOVE_PRODUCT) {
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
	} else if (action.type === CartActionTypes.INCREMENT_PRODUCT) {
		return {
			...state,
			productsList: state.productsList.map((product) =>
				product.id ===
				(action.payload as CartProductQuantity)?.cartProduct?.id
					? {
							...product,
							quantity:
								product.quantity! +
								(action.payload as CartProductQuantity).value
					  }
					: product
			),
			length: state.length + (action.payload as CartProductQuantity).value
		};
	} else if (action.type === CartActionTypes.DECREMENT_PRODUCT) {
		return {
			...state,
			productsList: state.productsList.map((product) =>
				product.id ===
				(action.payload as CartProductQuantity)?.cartProduct?.id
					? {
							...product,
							quantity:
								product.quantity! -
								(action.payload as CartProductQuantity).value
					  }
					: product
			),
			length: state.length - (action.payload as CartProductQuantity).value
		};
	} else return state;
};

export default cartReducer;
