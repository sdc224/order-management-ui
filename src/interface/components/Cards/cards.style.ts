import { makeStyles } from "@material-ui/core/styles";

const useCardsStyles = makeStyles(() => ({
	flex: {
		display: "flex"
	},
	flexColumn: {
		display: "flex",
		flexDirection: "column"
	},
	offerCardPaper: {
		position: "relative",
		justifyContent: "space-between",
		height: "100%",
		margin: "auto",
		overflow: "hidden",
		transition: "all 250ms ease-in-out 0s",
		borderRadius: 8
	},
	offerCardChip: {
		display: "inline-flex",
		position: "absolute",
		justifyContent: "center",
		height: 24,
		color: "white",
		backgroundColor: "maroon",
		cursor: "default",
		whiteSpace: "nowrap",
		transition:
			"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		top: 10,
		left: 10,
		zIndex: 11
	},
	offerCardTitle: {
		textOverflow: "ellipsis",
		marginBottom: 8,
		lineHeight: "1.5"
	},
	offerCardPrice: {
		color: "red",
		fontWeight: 600,
		paddingRight: 8
	},
	crossedPrice: {
		textDecoration: "line-through",
		color: "grey"
	}
}));

export default useCardsStyles;
