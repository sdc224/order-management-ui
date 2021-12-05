import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Section from "../../components/Section";
import useHomeStyles from "./home.styles";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { OfferCard } from "../../components/Cards";
import { OfferCardProps } from "../../components/Cards/OfferCard";
import Flash2 from "../../../assets/images/flash-2.png";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";

interface DealProps extends OfferCardProps {
	id: number;
}

const offerCard: OfferCardProps = {
	title: "Smart Watch Black",
	rating: 4,
	price: 2000,
	crossedPrice: 2200,
	percent: 20,
	image: Flash2
};

const offers: DealProps[] = [
	{
		id: 1,
		...offerCard
	},
	{
		id: 2,
		...offerCard
	},
	{
		id: 3,
		...offerCard
	},
	{
		id: 4,
		...offerCard
	}
];

interface Props {}

const DealsSection = (props: Props) => {
	const classes = useHomeStyles();

	return (
		<Box marginBottom={60 / 8}>
			<Container className={classes.container} maxWidth="lg">
				<Section
					title="Flash Deals"
					icon={<FlashOnIcon color="secondary" />}
				>
					<Grid
						className={classes.gridContainer}
						container
						spacing={3}
					>
						{offers.map((offer) => (
							<Grid key={offer.id} item xs={6} md={4} lg={3}>
								<OfferCard {...offer} />
							</Grid>
						))}
					</Grid>
				</Section>
			</Container>
		</Box>
	);
};

export default DealsSection;
