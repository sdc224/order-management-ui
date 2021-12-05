import React from "react";
import FormControl from "@material-ui/core/FormControl";
// import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
// import Box from "@material-ui/core/Box";
import useSearchStyles from "./search.styles";
import useSearchSelector from "../../../data/selectors/searchSelector";

interface Props {}

const Search = (props: Props) => {
	const classes = useSearchStyles();

	const { searchKey, changeKey, closeSearch } = useSearchSelector();

	const handleChange = (
		event: React.ChangeEvent<{
			value: unknown;
		}>
	) => {
		changeKey(event?.target?.value as string);
		if ((event?.target?.value as string).length === 0) {
			closeSearch();
		}
	};

	return (
		<FormControl className={classes.form} fullWidth>
			<TextField
				id="search-field"
				variant="outlined"
				style={{ margin: 8 }}
				placeholder="Searching for..."
				fullWidth
				margin="normal"
				value={searchKey}
				InputProps={{
					startAdornment: <SearchOutlinedIcon fontSize="small" />
					// endAdornment: (
					// 	<Button>
					// 		<Box marginRight={1}>All Categories</Box>
					// 	</Button>
					// )
				}}
				onChange={handleChange}
			/>
		</FormControl>
	);
};

export default Search;
