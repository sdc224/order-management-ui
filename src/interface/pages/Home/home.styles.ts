import { makeStyles } from "@material-ui/core/styles";

const useHomeStyles = makeStyles(() => ({
	container: {
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
		padding: "2rem 16px"
	},
	gridContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	}
}));

export default useHomeStyles;
