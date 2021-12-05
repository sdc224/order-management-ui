import { makeStyles } from "@material-ui/core/styles";

const useHeaderStyles = makeStyles(() => ({
	root: {
		background: "#0F3460",
		color: "white",
		height: 40,
		fontSize: 12
	},
	container: {
		display: "flex",
		height: "100%",
		justifyContent: "space-between",
		alignItems: "center"
	},
	selectIcon: {
		color: "white"
	},
	selectMenu: {
		top: "40px !important"
	},
	formControl: {
		marginRight: "1.25rem"
	},
	select: {
		color: "white",
		fontSize: 16
	}
}));

export default useHeaderStyles;
