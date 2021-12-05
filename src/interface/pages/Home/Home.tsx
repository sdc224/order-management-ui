import React from "react";
import useProductSelector from "../../../data/selectors/productSelector";
import useSearchSelector from "../../../data/selectors/searchSelector";
import DealsSection from "./DealsSection";
import SearchSection from "./SearchSection";
import TopSection from "./TopSection";

interface Props {}

const Home: React.FC<Props> = (props) => {
	const { loading, error, productsList, fetchProducts } =
		useProductSelector();
	const { searchKey, open: searchOpen } = useSearchSelector();

	React.useEffect(() => {
		if (searchKey.length > 2) fetchProducts(searchKey);
		else if (searchKey.length === 0) fetchProducts();
	}, [searchOpen, searchKey, fetchProducts]);

	if (loading) return <h1>Loading...</h1>;

	if (!loading && error) return <h1>An Error Occurred</h1>;

	const getComponent = () => {
		if (searchOpen) return <SearchSection products={productsList} />;

		return (
			<>
				<TopSection />
				<DealsSection products={productsList} />
			</>
		);
	};

	return <div style={{ paddingTop: 0 }}>{getComponent()}</div>;
};

export default Home;
