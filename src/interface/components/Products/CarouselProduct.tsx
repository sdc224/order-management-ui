import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useCarouselProductStyles from "./carouselProduct.styles";

interface CarouselProductProps {
	title: string;
	description: string;
	buttonText: string;
	handleButtonClick?: () => {};
}

const CarouselProduct: React.FC<CarouselProductProps> = ({
	title,
	description,
	buttonText,
	handleButtonClick
}) => {
	const classes = useCarouselProductStyles();
	return (
		<Box
			display="flex"
			textAlign="left"
			justifyContent="space-between"
			alignItems="center"
		>
			<Grid container xs={3}>
				<Grid className={classes.gridItem} item xs={12} sm={5}>
					<Typography className={classes.title} variant="h1">
						{title}
					</Typography>
					<Typography className={classes.description}>
						{description}
					</Typography>
					<Button variant="contained" onClick={handleButtonClick}>
						{buttonText}
					</Button>
				</Grid>
				<Grid item xs={12} sm={5}>
					<img src="/static" alt="Product" className={classes.img} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default CarouselProduct;
