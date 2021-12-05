import { makeStyles } from "@material-ui/core/styles";

const useCustomLinkStyles = makeStyles(() => ({
	root: {
		textDecoration: "none",
		cursor: "pointer",
		color: "white",
		"&:hover": {
			textDecoration: "none",
			color: "pink"
		}
	}
}));

export default useCustomLinkStyles;
