import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./assets/Background.mp4";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
// import other pages if needed

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-auto">
        {/* Background Video */}
        <video
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
          src={Background}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay for dark effect */}
        <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-0"></div>

        {/* Content on top */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* ✅ Header must be inside Router */}
          <Header />

          {/* Main content with routing */}
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Add other routes here */}
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
