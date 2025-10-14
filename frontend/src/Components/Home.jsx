import React from "react";
import FlipCard from "./FliipCard";
import Background from "../assets/Background.mp4";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (

<motion.div
    key = {index}
    initial ={{opacity:0,y:-50,scale:0.8}}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
  type: "tween",
  ease: "easeOut", // options: easeIn, easeInOut, linear
  duration: 0.5,
  delay: index * 0.1
}}>

          <FlipCard
            key={index}
            videoSrc={Background}
            navigateTo={ "/preview1" }
            frontText="Tap for more"
          />
          </motion.div>
        ))}
        
      </div>
    </div>
  );
};

export default Home;
