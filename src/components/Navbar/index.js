import { Box, Container, Typography, Stack, List, ListItemButton, ListItemIcon, Badge, Button } from "@mui/material";
import {
	FavoriteBorder,
	KeyboardArrowDown,
	Menu,
	PersonOutline,
	Search,
	ShoppingCart,
} from "@mui/icons-material";

export default function Navbar() {
    const mentuItem = [
		{ name: "Home", to: "/" },
		{ name: "Shop", to: "/shop" },
		{ name: "Pages", to: "/pages" },
		{ name: "About", to: "/about" },
		{ name: "blog", to: "/blog" },
		{ name: "Contact", to: "/contact" },
	];
  return (
		<>
			<Box
				sx={{
					background: "#ddd",
					minHeight: "40px",
					display: "flex",

					justifyContent: "space-between",
				}}
			>
				<Container>
					<Stack direction="row" justifyContent="space-between">
						<Box>
							<Button
								sx={{
									background: "#3577f0",
									padding: 2,
								  	color: "#fff",
									borderRadius: 0
								}}
								startIcon={<Menu />}
							>
								Category
							</Button>
						</Box>

						<Stack alignItems="center" direction="row" spacing={4}>
							{mentuItem.map((item, index) => (
								// <Link to={item.to}>
								<Typography
									variant="span"
									display="flex"
									alignItem="center"
								>
									{item.name}
									<KeyboardArrowDown />
								</Typography>
								// </Link>
							))}
						</Stack>

						<Stack
							direction="row"
							spacing={2}
							color="blue"
							alignItems="center"
						>
							<FavoriteBorder />
							<Badge badgeContent={4} color="primary">
								<ShoppingCart color="action" />
							</Badge>
							<PersonOutline />
						</Stack>
					</Stack>
				</Container>
			</Box>
		</>
  );
}
