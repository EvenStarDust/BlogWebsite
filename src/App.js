import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from './Components/Footer/Footer';
import { Routes,Route } from "react-router-dom";
import Categories from "./Components/Categories/Categories";
function App() {
  return (
    <div className="App">
      <Navbar title="Evenstar" />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />

         
        </Routes>
       
        <Footer />
    </div>
  );
}

export default App;
