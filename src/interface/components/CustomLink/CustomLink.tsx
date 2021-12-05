import React from "react";
import Link, { LinkTypeMap } from "@material-ui/core/Link";
import type { DefaultComponentProps } from "@material-ui/core/OverridableComponent";
import clsx from "clsx";
import useCustomLinkStyles from "./customLink.styles";

interface CustomLinkProps extends DefaultComponentProps<LinkTypeMap> {}

const CustomLink: React.FC<CustomLinkProps> = ({ ...props }) => {
	const classes = useCustomLinkStyles();

	return <Link {...props} className={clsx(classes.root, props.className)} />;
};

export default CustomLink;
