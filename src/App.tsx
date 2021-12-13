import { ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DEFAULT_ROUTE, RouteSection } from "./common/appConfig";
import { theme } from "./common/styles";
import Hero from "./containers/hero/Hero";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={`${RouteSection.Hero}/*`} element={<Hero />} />
          <Route path="*" element={<Navigate to={DEFAULT_ROUTE} />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
