import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteSection } from "./common/appConfig";
import { theme } from "./common/styles";
import Hero from "./containers/hero/Hero";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={RouteSection.Hero} element={<Hero />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
