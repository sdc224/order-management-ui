import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import useCartPageStyles from "./cartPage.styles";
import CustomIconButton from "../../components/Buttons/IconButton";
import productImage from "../../../assets/images/9.Heavy20ktGoldNecklace.png";
import { CartProduct } from "../../../data/types/cartTypes";

interface CartProductsSectionProps {
	products?: CartProduct[];
	currencySymbol?: string;
}

const CartProductsSection: React.FC<CartProductsSectionProps> = ({
	products = [],
	currencySymbol = "₹"
}) => {
	const classes = useCartPageStyles();

	return (
		<>
			{products.map((product) => (
				<Paper className={classes.product} elevation={1}>
					<img
						src={productImage}
						alt="Product"
						width={140}
						height={140}
					/>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
						minWidth={0}
						width="100%"
						padding={20 / 8}
					>
						<Link className={classes.productTitle}>
							{product.name}
						</Link>
						<Box position="absolute" top="1rem" right="1rem">
							<CustomIconButton
								icon={<CloseIcon fontSize="small" />}
							/>
						</Box>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="flex-end"
						>
							<Box
								display="flex"
								flexWrap="wrap"
								alignItems="center"
							>
								<Box
									component="span"
									color="rgb(125, 135, 156)"
									lineHeight={1.5}
									marginRight={8 / 8}
									whiteSpace="normal"
								>
									{`${currencySymbol}${(product as any)
										.product.price!}X
									${product.quantity!}`}
								</Box>
								<Box
									component="span"
									color="rgb(210, 63, 87)"
									lineHeight={1.5}
									fontWeight={600}
									marginRight={16 / 8}
									whiteSpace="normal"
								>
									{`${currencySymbol}${
										(product as any).product.price! *
										product.quantity!
									}`}
								</Box>
							</Box>
							<Box display="flex" alignItems="center">
								<CustomIconButton
									icon={<AddIcon fontSize="small" />}
								/>
								<Box
									component="span"
									marginLeft={8 / 8}
									marginRight={8 / 8}
									lineHeight={1.5}
									fontWeight={600}
									fontSize={15}
									whiteSpace="normal"
								>
									{product.quantity}
								</Box>
								<CustomIconButton
									icon={<RemoveIcon fontSize="small" />}
								/>
							</Box>
						</Box>
					</Box>
				</Paper>
			))}
		</>
	);
};

export default CartProductsSection;
