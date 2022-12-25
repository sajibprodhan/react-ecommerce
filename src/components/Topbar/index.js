import React, { useState } from "react";

import { KeyboardArrowDown, Menu as MenuIcon, Search } from "@mui/icons-material";
import {
	Link,
	Container,
	Box,
	InputBase,
	MenuItem,
	Button,
	Menu,
    Grid,
    Stack,
} from "@mui/material";


export default function Topbar() {
	const [openCurrency, setCurrency] = useState(false);
	return (
		<>
			<Container>
				<Grid container alignItems="center" padding="30px 0">
					<Grid item lg={3} md={3} sm={12}>
						<Link to="/">
							<img src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png" />
						</Link>
					</Grid>

					<Grid item lg={9} md={9} xs={12}>
						<Stack
							direction="row"
							spacing={3}
							justifyContent="space-between"
							alignItems="center"
						>
							<Box flex={1}
								sx={{
									border: "1px solid #ebe9e9",
									padding: "3px 13px",
									alignItems: "center",
									display: "flex",
								}}
							>
								<Search sx={{ marginRight: "8px" }} />
								<InputBase
									placeholder="What are you lookin for.."
									inputProps={{ "aria-label": "search" }}
									sx={{ color: "#ddd" }}
									name="search"
								/>
								<MenuIcon
									sx={{
										display: {
											xs: "block",
											sm: "block",
											md: "none",
										},
									}}
								/>
							</Box>

							<Box>
                                <Button
                                    border="1px solid #ddd"
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
									
								>
									<MenuItem disableRipple>USD</MenuItem>
									<MenuItem disableRipple>AUD</MenuItem>
									<MenuItem disableRipple>EUR</MenuItem>
								</Menu>

                                
							</Box>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
