import { AllEffect, ForkEffect, all, fork } from "redux-saga/effects";
import productSaga from "./productSaga";

export default function* rootSaga(): Generator<
	AllEffect<ForkEffect<void>>,
	void,
	unknown
> {
	yield all([fork(productSaga)]);
}
