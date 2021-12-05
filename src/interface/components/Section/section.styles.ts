import { makeStyles } from "@material-ui/core/styles";

const useSectionStyles = makeStyles(() => ({
	section: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%"
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24
	},
	icon: {
		display: "flex",
		marginRight: 8,
		alignItems: "center"
	}
}));

export default useSectionStyles;
