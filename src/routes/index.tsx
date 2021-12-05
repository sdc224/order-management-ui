import React from "react";
import { useRoutes } from "react-router-dom";
import { Main } from "../interface/layouts";
import { Dashboard, Home } from "../interface/pages";

const MyRoutes = () =>
	useRoutes([
		{
			path: "/",
			element: (
				<Main>
					<Home />
				</Main>
			)
		},
		{
			path: "/dashboard",
			element: (
				<Main>
					<Dashboard />
				</Main>
			)
		}
	]);

export default MyRoutes;
