import {
	all,
	AllEffect,
	call,
	fork,
	ForkEffect,
	put,
	takeLatest
} from "@redux-saga/core/effects";
import { PayloadAction } from "typesafe-actions";
import axios from "axios";
import { CartActionTypes } from "../../types/cartTypes";
import {
	fetchCartProductError,
	setCartProduct
} from "../../actions/cartActions";
import { getFormData } from "../../../utils/helpers/apiCaller";

interface ProductRequestDTO {
	id: string;
	name: string;
	quantity: number;
}

interface ProductDeleteRequestDTO {
	product: ProductRequestDTO[];
	deleteAll: boolean;
}

const header = {
	Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN
};

const fetchCartProducts = async () =>
	axios.get("/api/cart/get", { headers: { ...header } });

function* workerCartFetchSaga(action: PayloadAction<string, any>) {
	try {
		const response: ResponseGenerator = yield call(fetchCartProducts);

		console.log(response);

		if (response.status && response.data) {
			yield put(
				setCartProduct({
					cartProduct: response.data,
					total: response.data[0].cartSession.total
				})
			);
		} else {
			yield put(fetchCartProductError("Some Issue in Response"));
		}
	} catch (error) {
		console.error(error);

		yield put(fetchCartProductError(error as string));
	}
}

function* watchCartFetchSaga() {
	yield takeLatest(CartActionTypes.FETCH_CART_PRODUCT, workerCartFetchSaga);
}

const addCartProducts = async (productRequestDTO: ProductRequestDTO) =>
	axios.post("/api/cart/add", productRequestDTO, {
		headers: { ...header, "Content-Type": "application/json" }
	});

function* workerCartAddSaga(action: PayloadAction<string, any>) {
	try {
		console.log(action.payload);

		const response: ResponseGenerator = yield call(
			addCartProducts,
			action.payload.cartProduct
		);

		console.log(response.data);

		if (response.status && response.data) {
			yield put(
				setCartProduct({
					cartProduct: response.data,
					total: response.data.cartSession?.total
				})
			);
		} else {
			yield put(fetchCartProductError("Some Issue in Response"));
		}
	} catch (error) {
		console.error(error);

		yield put(fetchCartProductError(error as string));
	}
}

function* watchCartAddSaga() {
	yield takeLatest(CartActionTypes.INCREMENT_PRODUCT, workerCartAddSaga);
}

const deleteCartProducts = async (
	productDeleteRequestDTO: ProductDeleteRequestDTO
) =>
	axios.post("/api/cart/delete", productDeleteRequestDTO, {
		headers: { ...header, "Content-Type": "application/json" }
	});

function* workerCartDeleteSaga(action: PayloadAction<string, any>) {
	try {
		console.log(action.payload);

		const response: ResponseGenerator = yield call(
			deleteCartProducts,
			action.payload.cartProduct
		);

		console.log(response.data);

		if (response.status && response.data) {
			yield put(
				setCartProduct({
					cartProduct: response.data,
					total: response.data.cartSession?.total
				})
			);
		} else {
			yield put(fetchCartProductError("Some Issue in Response"));
		}
	} catch (error) {
		console.error(error);

		yield put(fetchCartProductError(error as string));
	}
}

function* watchCartDeleteSaga() {
	yield takeLatest(CartActionTypes.DECREMENT_PRODUCT, workerCartDeleteSaga);
}

export default function* cartSaga(): Generator<
	AllEffect<ForkEffect<void>>,
	void,
	unknown
> {
	yield all([
		fork(watchCartFetchSaga),
		fork(watchCartAddSaga),
		fork(watchCartDeleteSaga)
	]);
}
