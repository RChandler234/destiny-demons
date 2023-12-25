import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Vow from "./pages/VowOfTheDisciple";
import Garden from "./pages/Garden";
import LastWish from "./pages/LastWish";
import Vog from "./pages/Vog";
import Crypt from "./pages/Crypt";
import Oryx from "./pages/Oryx";
import { backgroundColor } from "./utils/colors";

export const AppRoutes = () => {
  const url = useLocation().pathname;
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        backgroundColor: backgroundColor(url),
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VOW" element={<Vow />} />
        <Route path="/RON" element={<Root />} />
        <Route path="/GARDEN" element={<Garden />} />
        <Route path="/LASTWISH" element={<LastWish />} />
        <Route path="/VAULTOFGLASS" element={<Vog />} />
        <Route path="/TANIKS" element={<Crypt />} />
        <Route path="/TOTEMS" element={<Oryx />} />
      </Routes>
    </div>
  );
};
