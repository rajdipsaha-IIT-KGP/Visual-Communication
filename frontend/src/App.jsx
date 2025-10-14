import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./assets/Background.mp4";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Preview1 from "./Components/Preview1";
// import other pages if needed

const App = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={Background}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for dark effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        {/* <Header /> */}

        {/* Main content with routing */}
        <main className="flex-grow">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/preview1" element={<Preview1 />} />
              {/* Add other routes here */}
            </Routes>
          </Router>
        </main>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
