import React from "react";
import Loading from "../components/Loading";

const HomePage = React.lazy(() => import("./Home"));
const CartPage = React.lazy(() => import("./Cart"));

export const Home = () => (
	<React.Suspense fallback={<Loading />}>
		<HomePage />
	</React.Suspense>
);

export const Cart = () => (
	<React.Suspense fallback={<Loading />}>
		<CartPage />
	</React.Suspense>
);
