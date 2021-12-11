import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { routePath } from "./common/appConfig";
import Heros from "./containers/hero/Heros";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path={routePath.hero.base} element={<Heros />} />
          <Route path="*" element={<Heros />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
