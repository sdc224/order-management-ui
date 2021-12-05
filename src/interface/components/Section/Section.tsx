import React from "react";
import Typography from "@material-ui/core/Typography";
import useSectionStyles from "./section.styles";
import Box from "@material-ui/core/Box";
import { ViewAllButton } from "../Buttons";

interface SectionProps {
	title?: string;
	icon?: React.ReactNode;
	action?: string;
}

const Section: React.FC<SectionProps> = ({ icon, title, children, action }) => {
	const classes = useSectionStyles();

	return (
		<Box className={classes.section}>
			<Box className={classes.header}>
				<Box display="flex">
					{icon && <Box className={classes.icon}>{icon}</Box>}
					{title && <Typography variant="h3">{title}</Typography>}
				</Box>
				{action && <ViewAllButton />}
			</Box>
			{children}
		</Box>
	);
};

export default Section;
