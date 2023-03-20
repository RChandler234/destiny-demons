import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Vow from "./pages/VowOfTheDisciple";
import Garden from "./pages/Garden";
import LastWish from "./pages/LastWish";
import Vog from "./pages/Vog";
import Crypt from "./pages/Crypt";
import Oryx from "./pages/Oryx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VOW" element={<Vow />} />
        <Route path="/RON" element={<Root />} />
        <Route path="/GARDEN" element={<Garden />} />
        <Route path="/LASTPISS" element={<LastWish />} />
        <Route path="/VAULTOFASS" element={<Vog />} />
        <Route path="/TANIKS" element={<Crypt />} />
        <Route path="/TOTEMS" element={<Oryx />} />
      </Routes>
    </Router>
  );
}

export default App;
