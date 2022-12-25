import React, { useState } from "react";

import { KeyboardArrowDown, Menu as MenuIcon } from "@mui/icons-material";
import {
	Link,
	Container,
	Box,
	InputBase,
	MenuItem,
	Button,
	Menu,
} from "@mui/material";

export default function Navbar() {
	const [openCurrency, setCurrency] = useState(false);
	return (
		<>
			<Container maxWidth="lg">
				<Box display="flex">
					<Box>
						<Link to="/">
							<img src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png" />
						</Link>
					</Box>

					<Box>
						<InputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
							sx={{ color: "black" }}
							name="search"
						/>
						{/* <MenuIcon /> */}
					</Box>

					<Box>
						<Button
							id="demo-customized-button"
							aria-haspopup="true"
							variant="outlined"
							disableElevation
							onClick={() => setCurrency(true)}
							endIcon={<KeyboardArrowDown />}
						>
							USD
						</Button>
						<Menu
							id="basic-menu"
							open={openCurrency}
							onClose={() => setCurrency(!openCurrency)}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
							transformOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
						>
							<MenuItem disableRipple>USD</MenuItem>
							<MenuItem disableRipple>AUD</MenuItem>
							<MenuItem disableRipple>EUR</MenuItem>
						</Menu>
					</Box>
				</Box>
			</Container>
		</>
	);
}
