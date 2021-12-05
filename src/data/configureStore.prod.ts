import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "./reducers";
import rootSaga from "./middlewares/sagas";
import ApplicationState from "./types";
import sagaMiddleware from "./middlewares";

const enhancer = applyMiddleware(sagaMiddleware);

function configureStore(
	initialState?: ApplicationState
): Store<ApplicationState> {
	const store = createStore(rootReducer, initialState, enhancer);
	sagaMiddleware.run(rootSaga);
	return store;
}

export default configureStore;
