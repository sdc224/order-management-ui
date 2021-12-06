import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import useCartPageStyles from "./cartPage.styles";

interface CartActionsSectionProps {
	total: number;
	currencySymbol?: string;
}

const CartActionsSection: React.FC<CartActionsSectionProps> = ({
	currencySymbol = "₹",
	total
}) => {
	const classes = useCartPageStyles();

	return (
		<Paper className={classes.actions} elevation={1}>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				marginBottom={16 / 8}
			>
				<Box
					component="span"
					color="rgb(125, 135, 156)"
					lineHeight={1.5}
					whiteSpace="normal"
				>
					Total:
				</Box>
				<Box
					component="span"
					lineHeight={1}
					fontSize={18}
					fontWeight={600}
					whiteSpace="normal"
				>
					{`${currencySymbol}${total.toFixed(2)}`}
				</Box>
			</Box>
			<Divider className={classes.divider} />
			<Button
				className={classes.checkoutButton}
				variant="contained"
				size="medium"
				color="secondary"
				fullWidth
				tabIndex="0"
			>
				Checkout Now
			</Button>
		</Paper>
	);
};

export default CartActionsSection;
