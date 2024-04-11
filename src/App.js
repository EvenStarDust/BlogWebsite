import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Categories from "./Components/Categories/Categories";
import Bilim from "./Components/Categories/Bilim/Bilim"
function App() {
  return (
    <div className="App">
      <Navbar title="Evenstar" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/bilim" element={<Bilim />} />
      </Routes>
    </div>
  );
}

export default App;
