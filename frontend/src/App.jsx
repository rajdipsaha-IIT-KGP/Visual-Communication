import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./assets/Background.mp4";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import BlueTea from "./Components/BlueTea";
import MornigaTea from "./Components/MornigaTea";

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
            </Routes>
          </main>

        
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
