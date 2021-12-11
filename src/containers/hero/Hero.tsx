import { Routes, Route } from "react-router-dom";
import HeroList from "./components/HeroList";

export default function Hero() {
  return (
    <Routes>
      <Route path="/" element={<HeroList />} />
    </Routes>
  );
}
