import React from "react";
import NikeBlack from "../../../assets/images/nike-black.png";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import useHomeStyles from "./home.styles";
import Carousel from "react-material-ui-carousel";
import { CarouselProduct } from "../../components/Products";
import clsx from "clsx";

interface Props {}

const array = [
	{
		id: 1,
		title: "50% off on your first Shopping",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis ex venenatis, interdum tellus eu, rutrum eros. Sed dignissim scelerisque dapibus",
		buttonText: "Shop Now",
		imgPath: NikeBlack
	},
	{
		id: 2,
		title: "Free Delivery on All Orders above ₹300",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis ex venenatis, interdum tellus eu, rutrum eros. Sed dignissim scelerisque dapibus",
		buttonText: "Shop Now",
		imgPath: NikeBlack
	}
];

const TopSection = (props: Props) => {
	const classes = useHomeStyles();

	return (
		<Box marginBottom={60 / 8}>
			<Container
				className={clsx(classes.container, classes.white)}
				maxWidth="lg"
			>
				<Box position="relative" minWidth={0}>
					<Carousel animation="slide">
						{array.map((item) => (
							<CarouselProduct key={item.id} {...item} />
						))}
					</Carousel>
				</Box>
			</Container>
		</Box>
	);
};

export default TopSection;
