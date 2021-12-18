import { ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { DEFAULT_ROUTE, RouteSection } from "./common/appConfig";
import { theme } from "./common/styles";
import Hero from "./containers/hero/Hero";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {
  // Project version injected build time
  console.info("version: ", process.env.REACT_APP_MY_VERSION!);
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path={`${RouteSection.Hero}/*`} element={<Hero />} />
            <Route path="*" element={<Navigate to={DEFAULT_ROUTE} />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
