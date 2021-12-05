import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopBar from "../components/TopBar";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	content: {
		backgroundColor: theme.palette.background.default,
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		height: "100%"
	}
}));

interface MainProps {
	children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
	const classes = useStyles();
	// const theme = useTheme();
	// const isDesktop = useMediaQuery<Theme>(
	// 	(theme as Theme).breakpoints.up("lg"),
	// 	{
	// 		defaultMatches: true
	// 	}
	// );

	// const [openSidebar, setOpenSidebar] = useState(false);

	// const handleSidebarOpen = () => {
	// 	setOpenSidebar(true);
	// };

	// const handleSidebarClose = () => {
	// 	setOpenSidebar(false);
	// };

	// const shouldOpenSidebar = isDesktop ? true : openSidebar;

	return (
		<div
			className={clsx({
				[classes.root]: true
				// [classes.shiftContent]: isDesktop
			})}
		>
			<Header />
			<TopBar />
			{/* <Sidebar
				onClose={handleSidebarClose}
				open={shouldOpenSidebar}
				variant={isDesktop ? "persistent" : "temporary"}
			/> */}
			<main className={classes.content}>
				{children}
				<Footer />
			</main>
		</div>
	);
};

export default Main;
