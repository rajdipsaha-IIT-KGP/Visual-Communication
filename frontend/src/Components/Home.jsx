import React from "react";
import FlipCard from "./FliipCard";
import Background from "../assets/Background.mp4";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <FlipCard
            key={index}
            videoSrc={Background}
            navigateTo={ "/preview1" }
            frontText="Tap for more"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
