import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	CartAwareState,
	CartProduct,
	CartProductQuantity
} from "../types/cartTypes";
import {
	addProduct,
	removeProduct,
	incrementProduct,
	decrementProduct
} from "../actions/cartActions";

const useCartSelector = () => {
	const dispatch = useDispatch();

	const productsList = useSelector(
		(state: CartAwareState) => state.cart.productsList
	);

	const length = useSelector((state: CartAwareState) => state.cart.length);

	const add = React.useCallback(
		(mode: CartProduct) => dispatch(addProduct(mode)),
		[dispatch]
	);

	const remove = React.useCallback(
		(mode: CartProduct) => dispatch(removeProduct(mode)),
		[dispatch]
	);

	const increment = React.useCallback(
		(mode: CartProductQuantity) => dispatch(incrementProduct(mode)),
		[dispatch]
	);

	const decrement = React.useCallback(
		(mode: CartProductQuantity) => dispatch(decrementProduct(mode)),
		[dispatch]
	);

	return {
		productsList,
		length,
		add,
		remove,
		increment,
		decrement
	};
};

export default useCartSelector;
