import { AllEffect, ForkEffect, all, fork } from "redux-saga/effects";
import productSaga from "./productSaga";
import cartSaga from "./cartSaga";

export default function* rootSaga(): Generator<
	AllEffect<ForkEffect<void>>,
	void,
	unknown
> {
	yield all([fork(productSaga), fork(cartSaga)]);
}
