import React from "react";
import DealsSection from "./DealsSection";
import TopSection from "./TopSection";

interface Props {}

const Home: React.FC<Props> = (props) => {
	return (
		<div style={{ paddingTop: 0 }}>
			<TopSection />
			<DealsSection />
		</div>
	);
};

export default Home;
