import { makeStyles } from "@material-ui/core/styles";

const useTopBarStyles = makeStyles(() => ({
	root: {
		flexGrow: 1
	},
	appBar: {
		zIndex: 2,
		boxShadow: "none"
	},
	title: {
		flexGrow: 1
	},
	tool: {
		position: "relative"
	},
	container: {
		display: "flex",
		alignItems: "center",
		height: "100%"
	},
	iconButton: {
		backgroundColor: "rgb(243, 245, 249)",
		marginLeft: 16
	}
}));

export default useTopBarStyles;
