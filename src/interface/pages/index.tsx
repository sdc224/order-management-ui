import React from "react";
import Loading from "../components/Loading";

const HomePage = React.lazy(() => import("./Home"));
const DashboardPage = React.lazy(() => import("./Dashboard"));

export const Home = () => (
	<React.Suspense fallback={<Loading />}>
		<HomePage />
	</React.Suspense>
);

export const Dashboard = () => (
	<React.Suspense fallback={<Loading />}>
		<DashboardPage />
	</React.Suspense>
);
