import { Box, Container, Grid, Link, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { Stack } from '@mui/system';

export default function Navbar() {
    const mentuItem = [
		{ name: "Home", to: "/" },
		{ name: "Shop", to: "/shop" },
		{ name: "Pages", to: "/pages" },
		{ name: "About", to: "/about" },
		{ name: "blog", to: "/blog" },
		{ name: "Contact", to: "/contact" },
		{ name: "About Us", to: "/about-us" },
	];
  return (
		<>
			<Box sx={{ background: "#ddd", minHeigh: "40px" }}>
				<Container>
					<Grid container>
						<Grid item sx={{ md: "3", sm: "12", xs: "12" }}>
							<Box>
								<Menu />
								<Typography variant="span">Category</Typography>
							</Box>
						</Grid>

						<Grid item sx={{ md: "3", sm: "12", xs: "12" }}>
							<Stack direction="row" spacing={4}>
								{mentuItem.map((item, index) => (
									// <Link to={item.to}>
										<Typography variant="p">
											{item.name}
										</Typography>
									// </Link>
								))}
							</Stack>
						</Grid>

						<Grid item sx={{ md: "3", sm: "12", xs: "12" }}></Grid>
					</Grid>
				</Container>
			</Box>
		</>
  );
}
