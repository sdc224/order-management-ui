import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
	let cartCount = 0;

	return (
		<Link to="/cart" style={{ color: "#2f3542" }}>
			<Button color="inherit">
				Cart
				<ShoppingCartIcon
					style={{ marginLeft: "12%", marginRight: "1%" }}
				/>
				<span className="cartNumber" style={{}}>
					{cartCount}
				</span>
			</Button>
		</Link>
	);
};

export default Cart;
