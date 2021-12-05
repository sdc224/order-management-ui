import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutline";
import React from "react";
import useHeaderStyles from "./header.styles";
import FormControl from "@material-ui/core/FormControl";
import { MenuItem, Select } from "@material-ui/core";
import CustomLink from "../CustomLink";

interface HeaderProps {
	mobileNumber?: string;
	mailId?: string;
}

const Header: React.FC<HeaderProps> = ({
	mobileNumber = "+91 92145 31540",
	mailId = "sourodeep224@outlook.com"
}) => {
	const classes = useHeaderStyles();

	const [language, setLanguage] = React.useState("EN");
	const [languageOpen, setLanguageOpen] = React.useState(false);

	const handleLanguageChange = (
		event: React.ChangeEvent<{
			value: unknown;
		}>
	) => {
		setLanguage(event?.target?.value as string);
	};

	const handleLanguageSelect = () => {
		setLanguageOpen(!languageOpen);
	};

	return (
		<div className={classes.root}>
			<Container className={classes.container} maxWidth="lg">
				<Box display="flex" alignItems="center">
					<Box display="flex" alignItems="center">
						<CallOutlinedIcon fontSize="small" />
						<Box
							marginLeft={10 / 8}
							component="span"
							lineHeight="1.5"
						>
							{mobileNumber}
						</Box>
					</Box>
					<Box display="flex" alignItems="center" marginLeft={20 / 8}>
						<MailOutlinedIcon fontSize="small" />
						<Box
							marginLeft={10 / 8}
							component="span"
							lineHeight="1.5"
						>
							{mailId}
						</Box>
					</Box>
				</Box>
				<Box display="flex" alignItems="center">
					<CustomLink style={{ marginRight: 30 }}>
						Need Help?
					</CustomLink>
					<FormControl className={classes.formControl}>
						<Select
							classes={{ icon: classes.selectIcon }}
							className={classes.select}
							disableUnderline
							MenuProps={{
								classes: { paper: classes.selectMenu }
							}}
							open={languageOpen}
							onOpen={handleLanguageSelect}
							onClose={handleLanguageSelect}
							onChange={handleLanguageChange}
							value={language}
						>
							<MenuItem value="EN">EN</MenuItem>
							<MenuItem value="BN">BN</MenuItem>
							<MenuItem value="HN">HN</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Container>
		</div>
	);
};

export default Header;
