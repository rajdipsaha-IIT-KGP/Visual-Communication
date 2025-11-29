import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

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

import { pageview } from "./utils/gtag"; 

// Track GA page views
const RouteChangeTracker = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return children;
};

const App = () => {
  return (
    <Router>
      <RouteChangeTracker>
        {/* Main app wrapper */}
        <div className="flex flex-col min-h-screen bg-transparent">

          {/* Always visible Header */}
          <Header />

          {/* Dynamic pages */}
          <main className="flex-1">
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

          {/* Footer always visible */}
          

        </div>
      </RouteChangeTracker>
    </Router>
  );
};

export default App;
