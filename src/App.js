
// Meterial ui font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider } from "@material-ui/styles";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";

import { theme } from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Topbar/>
			<Navbar/>
		</ThemeProvider>
	);
}

export default App;
