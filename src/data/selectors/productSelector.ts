import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductsAwareState } from "../types/productsTypes";
import { fetchProduct } from "../actions/productActions";

const useProductSelector = () => {
	const dispatch = useDispatch();

	const loading = useSelector(
		(state: ProductsAwareState) => state.products.loading
	);

	const error = useSelector(
		(state: ProductsAwareState) => state.products.error
	);

	const productsList = useSelector(
		(state: ProductsAwareState) => state.products.productsList
	);

	const fetchProducts = React.useCallback(
		(q?: string) => dispatch(fetchProduct(q)),
		[dispatch]
	);

	return {
		loading,
		productsList,
		error,
		fetchProducts
	};
};

export default useProductSelector;
