import React from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useCartStyles from "./cart.styles";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
	let cartCount = 0;
	const classes = useCartStyles();

	return (
		<Badge badgeContent={cartCount}>
			<IconButton className={classes.iconButton} size="medium">
				<ShoppingCartIcon />
			</IconButton>
		</Badge>
	);
};

export default Cart;
