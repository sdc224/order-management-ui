import { makeStyles } from "@material-ui/core/styles";

const useCartPageStyles = makeStyles(() => ({
	product: {
		color: "rgb(43, 52, 69)",
		position: "relative",
		display: "flex",
		transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		borderRadius: 10,
		backgroundColor: "white",
		marginBottom: "1.5rem",
		overflow: "hidden",
		boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px"
	},
	productTitle: {
		fontSize: 18,
		fontWeight: 600,
		lineHeight: 1.5,
		marginBottom: 8,
		textTransform: "none",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		overflow: "hidden"
	},
	actions: {
		backgroundColor: "white",
		color: "rgb(43, 52, 69)",
		transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
		boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
		overflow: "hidden",
		borderRadius: 8,
		padding: "1.5rem 1.75rem"
	},
	divider: {
		margin: "0px 0px 1rem",
		flexShrink: 0,
		borderWidth: "0px 0px thin",
		borderStyle: "solid",
		borderColor: "rgb(243, 245, 249)"
	},
	checkoutButton: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "0.875rem",
		lineHeight: 1.75,
		padding: "6px 16px",
		color: "white"
	}
}));

export default useCartPageStyles;
