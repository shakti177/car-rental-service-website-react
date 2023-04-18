import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Vehicle from './Pages/Vehicle';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/vehicle" element={<Vehicle/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
