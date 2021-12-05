export const SearchActionTypes = {
	CHANGE_KEY: "@@search/CHANGE_KEY",
	CLOSE_SEARCH: "@@search/CLOSE_SEARCH",
	RESET_KEY: "@@search/RESET_KEY"
};

export interface SearchState {
	openSearch: boolean;
	searchKey: string;
}

export interface SearchAwareState {
	search: SearchState;
}
