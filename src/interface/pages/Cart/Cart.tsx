import React from "react";
import Grid from "@material-ui/core/Grid";
import CartProductsSection from "./CartProductsSection";
import CartActionsSection from "./CartActionsSection";
import useCartSelector from "../../../data/selectors/cartSelector";

const Cart = () => {
	const { loading, error, productsList, total, fetch } = useCartSelector();

	React.useEffect(() => {
		fetch();
	}, [fetch]);

	if (loading) return <h1>Loading...</h1>;

	if (!loading && error) return <h1>Something went wrong!</h1>;

	return (
		<div style={{ paddingTop: 0 }}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={8} lg={8}>
					<CartProductsSection products={productsList} />
				</Grid>
				<Grid item xs={12} md={4} lg={4}>
					<CartActionsSection total={total} />
				</Grid>
			</Grid>
		</div>
	);
};

export default Cart;
