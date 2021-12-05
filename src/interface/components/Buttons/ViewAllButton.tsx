import Box from "@material-ui/core/Box";
import ArrowRight from "@material-ui/icons/ArrowRight";
import React from "react";
import useButtonStyles from "./buttons.styles";

interface ViewAllButtonProps {
	text?: string;
	onClick?: () => void;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({
	text = "View All",
	onClick = () => {}
}) => {
	const classes = useButtonStyles();

	return (
		<Box className={classes.viewAllButtonRoot} onClick={onClick}>
			{text}
			<ArrowRight />
		</Box>
	);
};

export default ViewAllButton;
