/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyMiddleware, createStore, Store, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from "./middlewares/sagas";
import ApplicationState from "./types";
import sagaMiddleware from "./middlewares";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (
			obj: Record<string, any>
		) => (...args: any) => any;
	}
	interface NodeModule {
		hot?: {
			accept: (path: string, cb: () => void) => void;
		};
	}
}

const configureStore = (
	initialState?: ApplicationState
): Store<ApplicationState> => {
	const middlewares = [];
	const enhancers = [];

	// Saga Middleware
	middlewares.push(sagaMiddleware);

	// Logging Middleware
	const logger = createLogger({
		level: "info",
		collapsed: true
	});

	// Skip redux logs in console during the tests
	if (process.env.NODE_ENV !== "test") {
		middlewares.push(logger);
	}

	// Router Middleware
	// Redux DevTools Configuration
	const actionCreators = {};
	// If Redux DevTools Extension is installed use it, otherwise use Redux compose
	/* eslint-disable no-underscore-dangle */
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Options: http://extension.remotedev.io/docs/API/Arguments.html
				actionCreators
		  })
		: compose;
	/* eslint-enable no-underscore-dangle */

	// Apply Middleware & Compose Enhancers
	enhancers.push(applyMiddleware(...middlewares));
	const enhancer = composeEnhancers(...enhancers);

	// Create Store
	const store = createStore(rootReducer, initialState, enhancer);

	// if (module.hot) {
	// module.hot.accept(
	// 	"./ducks",
	// 	// eslint-disable-next-line global-require
	// 	() => store.replaceReducer(require("./ducks").default)
	// );
	// }

	sagaMiddleware.run(rootSaga);

	return store;
};

export default configureStore;
