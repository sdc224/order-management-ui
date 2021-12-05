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
	imgPath: string;
	handleButtonClick?: () => {};
}

const CarouselProduct: React.FC<CarouselProductProps> = ({
	title,
	description,
	buttonText,
	imgPath,
	handleButtonClick
}) => {
	const classes = useCarouselProductStyles();
	return (
		<Box
			display="flex"
			textAlign="left"
			justifyContent="space-between"
			alignItems="center"
			width="100%"
		>
			<Grid container spacing={3} className={classes.container}>
				<Grid className={classes.gridItem} item xs={12} sm={5}>
					<Typography className={classes.title} variant="h1">
						{title}
					</Typography>
					<Typography className={classes.description}>
						{description}
					</Typography>
					<Button
						className={classes.button}
						variant="contained"
						color="secondary"
						onClick={handleButtonClick}
					>
						{buttonText}
					</Button>
				</Grid>
				<Grid item xs={12} sm={5}>
					<img src={imgPath} alt="Product" className={classes.img} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default CarouselProduct;
