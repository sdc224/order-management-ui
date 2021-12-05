import React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import ThemeWrapper from "./ThemeWrapper";

const Routes = React.lazy(() => import("../../routes"));

interface RootProps<T> {
	store: Store<T>;
}

const Root = <T extends unknown>({ store }: RootProps<T>) => (
	<Provider store={store}>
		<BrowserRouter>
			<ThemeWrapper>
				<React.Suspense fallback={<Loading />}>
					<Routes />
				</React.Suspense>
			</ThemeWrapper>
		</BrowserRouter>
	</Provider>
);

export default Root;
