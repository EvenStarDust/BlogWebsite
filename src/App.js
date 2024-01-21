import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home"
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar title="Evenstar" />
      <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
    </div>
  );
}

export default App;
