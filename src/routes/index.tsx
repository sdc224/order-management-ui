import React from "react";
import { useRoutes } from "react-router-dom";
import { Main } from "../interface/layouts";
import { Cart, Home } from "../interface/pages";

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
			path: "/cart",
			element: (
				<Main>
					<Cart />
				</Main>
			)
		}
	]);

export default MyRoutes;
