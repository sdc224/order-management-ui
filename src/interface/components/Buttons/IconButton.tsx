import React from "react";
import Button from "@material-ui/core/Button";
import useButtonStyles from "./buttons.styles";

interface CustomIconButtonProps {
	icon: React.ReactNode;
	onClick?: () => void;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({
	icon,
	onClick = () => {}
}) => {
	const classes = useButtonStyles();

	return (
		<Button
			className={classes.customIconButton}
			variant="outlined"
			size="medium"
			tabIndex="0"
			color="primary"
			onClick={onClick}
		>
			{icon}
		</Button>
	);
};

export default CustomIconButton;
