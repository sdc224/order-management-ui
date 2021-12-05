import React from "react";
import Button from "@material-ui/core/Button";

interface CustomIconButtonProps {
	icon: React.ReactNode;
}

const CustomIconButton: React.FC<CustomIconButtonProps> = ({ icon }) => {
	return (
		<Button variant="outlined" size="medium" tabIndex="0" color="primary">
			{icon}
		</Button>
	);
};

export default CustomIconButton;
