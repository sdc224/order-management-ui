import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Section from "../../components/Section";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import { OfferCard } from "../../components/Cards";
import useHomeStyles from "./home.styles";
import Flash2 from "../../../assets/images/flash-2.png";
import { Product } from "../../../data/types/productsTypes";
import { getMockBetweenTwo } from "../../../utils/mocks/mockNumber";

interface SearchSectionProps {
	products?: Product[];
}

const SearchSection: React.FC<SearchSectionProps> = ({ products = [] }) => {
	const classes = useHomeStyles();

	return (
		<Box marginBottom={60 / 8}>
			<Container className={classes.container} maxWidth="lg">
				<Section
					title="Showing Search Results"
					icon={<SearchIcon color="secondary" />}
				>
					<Grid
						className={classes.gridContainer}
						container
						spacing={3}
					>
						{products.map((product) => (
							<Grid key={product.id} item xs={6} md={4} lg={3}>
								<OfferCard
									id={product.id}
									name={product.name}
									price={product.price || 0}
									crossedPrice={getMockBetweenTwo(
										product.price || 0,
										(product.price || 0) * 2
									)}
									image={Flash2}
									percent={getMockBetweenTwo(1, 60)}
									rating={getMockBetweenTwo(1, 5)}
								/>
							</Grid>
						))}
					</Grid>
				</Section>
			</Container>
		</Box>
	);
};

export default SearchSection;
