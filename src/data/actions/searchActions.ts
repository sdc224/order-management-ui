import { action } from "typesafe-actions";
import { SearchActionTypes } from "../types/searchTypes";

export const changeSearchKey = (value: string) =>
	action(SearchActionTypes.CHANGE_KEY, value);

export const closeSearch = () => action(SearchActionTypes.CLOSE_SEARCH);

export const resetSearchKey = () => action(SearchActionTypes.RESET_KEY);
