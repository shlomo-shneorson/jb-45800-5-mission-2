import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Home/Home";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./Main.css";
import History from "../history/History";
import About from "../about/About";

function Main() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/history" element={<History />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Main;
