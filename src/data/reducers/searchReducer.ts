import { PayloadAction } from "typesafe-actions";
import { SearchActionTypes, SearchState } from "../types/searchTypes";

export const initialState: SearchState = {
	openSearch: false,
	searchKey: ""
};

const searchReducer = (
	state = initialState,
	action: PayloadAction<string, string | undefined>
): SearchState => {
	switch (action.type) {
		case SearchActionTypes.CHANGE_KEY:
			return {
				...state,
				openSearch: action.payload?.length! > 2,
				searchKey: action.payload!
			};

		case SearchActionTypes.RESET_KEY:
			return {
				...initialState
			};

		case SearchActionTypes.CLOSE_SEARCH:
			return { ...state, openSearch: false };

		default:
			return state;
	}
};

export default searchReducer;
