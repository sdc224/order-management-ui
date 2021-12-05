import React from "react";
import Button from "@material-ui/core/Button";
import useButtonStyles from "./buttons.styles";

interface CustomIconButtonProps {
	icon: React.ReactNode;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({ icon }) => {
	const classes = useButtonStyles();

	return (
		<Button
			className={classes.customIconButton}
			variant="outlined"
			size="medium"
			tabIndex="0"
			color="primary"
		>
			{icon}
		</Button>
	);
};

export default CustomIconButton;
