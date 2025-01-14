import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home/HomeContent";
import MainLayout from "./MainLayout";
export default function AppMain() {
  return (
    <Router>
      <Routes>
        <Route path="/green-orchard" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<AA />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
