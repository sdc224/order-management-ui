import { makeStyles } from "@material-ui/core/styles";

const useButtonStyles = makeStyles(() => ({
	viewAllButtonRoot: {
		display: "flex",
		marginLeft: 8,
		alignItems: "center",
		color: "rgb(125, 135, 156)"
	},
	customIconButton: {
		padding: 0,
		minWidth: 0
	}
}));

export default useButtonStyles;
