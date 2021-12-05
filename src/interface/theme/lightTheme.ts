import { createTheme } from "@material-ui/core/styles";

const lightTheme = createTheme({
	typography: {
		fontFamily: ["Open Sans", "Roboto"].join(",")
	},
	zIndex: {
		appBar: 1200,
		drawer: 1100
	}
});

export default lightTheme;
