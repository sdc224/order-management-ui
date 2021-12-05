import React from "react";
import useProductSelector from "../../../data/selectors/productSelector";
import DealsSection from "./DealsSection";
import TopSection from "./TopSection";

interface Props {}

const Home: React.FC<Props> = (props) => {
	const { loading, error, fetchProducts } = useProductSelector();

	React.useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	if (loading) return <h1>Loading...</h1>;

	if (!loading && error) return <h1>An Error Occurred</h1>;

	return (
		<div style={{ paddingTop: 0 }}>
			<TopSection />
			<DealsSection />
		</div>
	);
};

export default Home;
