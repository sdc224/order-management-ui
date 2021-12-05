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
		fontWeight: 600,
		fontSize: 14,
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
	},
	imgSpan: {
		display: "block",
		overflow: "hidden",
		width: "initial",
		height: "initial",
		background: "none",
		opacity: 1,
		border: 0,
		margin: 0,
		padding: 0,
		position: "relative"
	},
	imgSpanInside: {
		padding: "100% 0px 0px"
	},
	img: {
		position: "absolute",
		inset: 0,
		padding: 0,
		width: 0,
		height: 0,
		minWidth: "100%",
		maxWidth: "100%",
		minHeight: "100%",
		maxHeight: "100%"
	}
}));

export default useCardsStyles;
