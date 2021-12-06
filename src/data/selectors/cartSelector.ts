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
	decrementProduct,
	fetchCartProduct
} from "../actions/cartActions";

const useCartSelector = () => {
	const dispatch = useDispatch();

	const loading = useSelector((state: CartAwareState) => state.cart.loading);
	const error = useSelector((state: CartAwareState) => state.cart.error);

	const productsList = useSelector(
		(state: CartAwareState) => state.cart.productsList
	);

	const length = useSelector((state: CartAwareState) => state.cart.length);
	const total = useSelector((state: CartAwareState) => state.cart.total);

	const fetch = React.useCallback(
		() => dispatch(fetchCartProduct()),
		[dispatch]
	);

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
		loading,
		error,
		productsList,
		length,
		total,
		fetch,
		add,
		remove,
		increment,
		decrement
	};
};

export default useCartSelector;
