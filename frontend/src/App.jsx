import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./assets/Background.mp4";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import BlueTea from "./Components/BlueTea";
import MornigaTea from "./Components/MornigaTea";
import HibiscousTea from "./Components/HibiscousTea";
import AboutUs from "./Components/AboutUs";
import HibiscousJuice from "./Components/HibiscusJuice";
import Fish from "./Components/Fish";
import Honey from "./Components/Honey";
import Bori from "./Components/Bori";
import Roselle from "./Components/Roselle";
import Error from "./Components/Error";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-auto">
  
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
          src={Background}
          autoPlay
          loop
          muted
          playsInline
        ></video>

       
        <div className="fixed top-0 left-0 w-full h-full bg-black/10 z-0"></div>

      
        <div className="relative z-10 flex flex-col min-h-screen">
       
          <Header />
      

         
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bluetea" element={<BlueTea />} />
              <Route path="/moringatea" element={<MornigaTea />} />
              <Route path="/hibiscustea" element={<HibiscousTea />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/hibiscusjuice" element={<HibiscousJuice />} />
              <Route path="/fish" element={<Fish />} />
              <Route path="/honey" element={<Honey />} />
              <Route path="/bori" element={<Bori />} />
              <Route path="/roselle" element={<Roselle />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>

        
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
