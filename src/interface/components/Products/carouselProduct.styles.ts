import { makeStyles } from "@material-ui/core/styles";

const useCarouselProductStyles = makeStyles(() => ({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexFlow: "row wrap"
	},
	gridItem: {
		display: "flex",
		flexDirection: "column",
		minHeight: 424,
		alignItems: "baseline",
		justifyContent: "center"
	},
	title: {
		fontSize: 50,
		marginTop: 0,
		marginBottom: "1.35rem",
		lineHeight: 1.2,
		fontWeight: "bold"
	},
	description: {
		marginBottom: 21.6,
		fontSize: 14,
		color: "rgb(15, 52, 96)",
		whiteSpace: "normal"
	},
	button: {
		textTransform: "none",
		fontWeight: 600
	},
	img: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		maxHeight: 400,
		maxWidth: "100%"
	}
}));

export default useCarouselProductStyles;
