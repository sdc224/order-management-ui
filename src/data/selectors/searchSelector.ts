import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchAwareState } from "../types/searchTypes";
import {
	changeSearchKey,
	resetSearchKey,
	closeSearch as closeSearchBox
} from "../actions/searchActions";

const useSearchSelector = () => {
	const dispatch = useDispatch();

	const searchKey = useSelector(
		(state: SearchAwareState) => state.search.searchKey
	);

	const open = useSelector(
		(state: SearchAwareState) => state.search.openSearch
	);

	const changeKey = React.useCallback(
		(mode: string) => dispatch(changeSearchKey(mode)),
		[dispatch]
	);

	const closeSearch = React.useCallback(
		() => dispatch(closeSearchBox()),
		[dispatch]
	);

	const resetKey = React.useCallback(
		() => dispatch(resetSearchKey()),
		[dispatch]
	);

	return {
		searchKey,
		open,
		changeKey,
		closeSearch,
		resetKey
	};
};

export default useSearchSelector;
