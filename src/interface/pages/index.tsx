import React from "react";
import Loading from "../components/Loading";

const HomePage = React.lazy(() => import("./Home"));

export const Home = () => (
	<React.Suspense fallback={<Loading />}>
		<HomePage />
	</React.Suspense>
);
