import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	},
	tool: {
		position: "relative"
	}
}));

function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar style={{ backgroundColor: "#badc58" }} position="static">
				<Toolbar className={classes.tool}>
					<Typography variant="h6" className={classes.title}>
						<Link to="/" style={{ color: "#2f3542" }}>
							Redux Shopping
						</Link>
						<Cart />
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
export default Header;
