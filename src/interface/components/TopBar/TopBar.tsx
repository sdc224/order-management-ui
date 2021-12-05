import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Cart from "../Cart";
import { Box, Container, IconButton } from "@material-ui/core";
import useTopBarStyles from "./topBar.styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Search from "../Search";
// import { Slide, useScrollTrigger } from "@material-ui/core";

// interface ShowOnScrollProps {
// 	children: React.ReactElement<any, any>;
// }

interface TopBarProps {
	position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
}

// const ShowOnScroll = ({ children }: ShowOnScrollProps) => {
// 	// Note that you normally won't need to set the window ref as useScrollTrigger
// 	// will default to window.
// 	// This is only being set here because the demo is in an iframe.
// 	const trigger = useScrollTrigger({
// 		disableHysteresis: true,
// 		threshold: 200
// 	});

// 	const clonedChildren = React.cloneElement(children, { position: "fixed" });

// 	return (
// 		<Slide appear={false} direction="down" in={trigger}>
// 			{clonedChildren}
// 		</Slide>
// 	);
// };

const TopBar: React.FC<TopBarProps> = ({ position = "relative" }) => {
	const classes = useTopBarStyles();

	return (
		<div className={classes.root}>
			<AppBar
				className={classes.appBar}
				position={position}
				color="transparent"
			>
				<Box position="relative" zIndex={1} height={80}>
					<Container className={classes.container} maxWidth="lg">
						<Box
							display="flex"
							alignItems="center"
							marginRight={16 / 8}
							minWidth={170 / 8}
						>
							<h1>LOGO</h1>
						</Box>
						<Box
							display="flex"
							flex="1 1 0px"
							justifyContent="center"
						>
							<Box
								position="relative"
								flex="1 1 0px"
								maxWidth={670}
								marginLeft="auto"
								marginRight="auto"
							>
								<Search />
							</Box>
						</Box>
						<Box display="flex" alignItems="center">
							<IconButton className={classes.iconButton}>
								<PersonOutlineIcon />
							</IconButton>
							<Cart />
						</Box>
					</Container>
				</Box>
			</AppBar>
		</div>
	);
};

export default TopBar;

// TODO : Slide
// const TopBarWithSlide = () => {
// 	const classes = useStyles();

// 	return (
// 		<div className={classes.root}>
// 			<TopBar />
// 			<ShowOnScroll>
// 				<TopBar />
// 			</ShowOnScroll>
// 		</div>
// 	);
// };

// export default TopBarWithSlide;
