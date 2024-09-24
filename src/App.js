import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Components/Categories/Categories";
import Bilim from "./Components/Categories/Bilim/Bilim";
import Spor from "./Components/Categories/Spor/Spor";
import Teknoloji from "./Components/Categories/Teknoloji/Teknoloji";
import Beslenme from "./Components/Categories/Beslenme/Beslenme";
import Sinema from "./Components/Categories/Sinema/Sinema";
import Muzik from "./Components/Categories/Muzik/Muzik";
import Kitaplar from "./Components/Categories/Kitaplar/Kitaplar";
import Uzay from "./Components/Categories/Uzay/Uzay";
import GezilecekYerler from "./Components/Categories/Gezilecek_yerler/GezilecekYerler";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/Bilim" &&
        location.pathname !== "/Teknoloji" &&
        location.pathname !== "/Spor" &&
        location.pathname !== "/Beslenme" &&
        location.pathname !== "/Sinema" &&
        location.pathname !== "/Muzik" &&
        location.pathname !== "/Kitaplar" &&
        location.pathname !== "/Uzay" &&
        location.pathname !== "/GezilecekYerler" && <Navbar title="Evenstar" />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* GitHub Pages özel yolu */}
        <Route path="/BlogWebsite" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/Bilim" element={<Bilim />} />
        <Route path="/Teknoloji" element={<Teknoloji />} />
        <Route path="/Spor" element={<Spor />} />
        <Route path="/Beslenme" element={<Beslenme />} />
        <Route path="/Sinema" element={<Sinema />} />
        <Route path="/Muzik" element={<Muzik />} />
        <Route path="/Kitaplar" element={<Kitaplar />} />
        <Route path="/Uzay" element={<Uzay />} />
        <Route path="/GezilecekYerler" element={<GezilecekYerler />} />
      </Routes>
    </div>
  );
}

export default App;
