import React from "react";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useCartStyles from "./cartButton.styles";
import useCartSelector from "../../../../data/selectors/cartSelector";
import { useNavigate } from "react-router";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
	const classes = useCartStyles();
	const navigate = useNavigate();
	const { length } = useCartSelector();

	const handleClick = () => {
		navigate("/cart");
	};

	return (
		<Badge badgeContent={length || 0}>
			<IconButton
				className={classes.iconButton}
				size="medium"
				onClick={handleClick}
				// disabled={length === 0}
			>
				<ShoppingCartIcon />
			</IconButton>
		</Badge>
	);
};

export default Cart;
