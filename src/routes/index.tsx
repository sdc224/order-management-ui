import React from "react";
import { useRoutes } from "react-router-dom";
import { Main } from "../interface/layouts";
import { Home } from "../interface/pages";

const MyRoutes = () =>
	useRoutes([
		{
			path: "/",
			element: (
				<Main>
					<Home />
				</Main>
			)
		}
	]);

export default MyRoutes;
