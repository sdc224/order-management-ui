import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "typesafe-actions";
import axios from "axios";
import { ProductsActionTypes } from "../../types/productsTypes";
import {
	fetchProductError,
	setProductList
} from "../../actions/productActions";

interface FetchProduct {
	order?: string;
	page?: number;
	take?: number;
	q?: string;
}

const fetchProducts = async (
	fetchProductParams: FetchProduct = { order: "ASC", page: 1, take: 10 }
) => axios.get("/api/products/find", { params: fetchProductParams });

function* workerProductSaga(action: PayloadAction<string, any>) {
	try {
		const response: ResponseGenerator = yield call(fetchProducts);

		if (response.status && response.data) {
			yield put(setProductList(response.data.data));
		} else {
			yield put(fetchProductError("Some Issue in Response"));
		}
	} catch (error) {
		console.error(error);

		yield put(fetchProductError(error as string));
	}
}

export default function* watchProductSaga() {
	yield takeLatest(ProductsActionTypes.FETCH_PRODUCT, workerProductSaga);
}
