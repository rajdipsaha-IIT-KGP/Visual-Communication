import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FlipCard = ({
  videoSrc,
  frontText = "Tap for more",
  width = "250px",
  height = "250px",
  navigateTo = "/",
}) => {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate(); // ✅ call hook at top level

  return (
    <div
      className="relative cursor-pointer rounded-xl [perspective:1000px] overflow-hidden"
      style={{ width, height }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full rounded-xl [backface-visibility:hidden] flex flex-col">
          <div className="flex-1 w-full h-full">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>

          <div className="w-full bg-black/40 border-t border-gray-400 flex justify-center items-center p-2 rounded-b-xl">
            <p className="text-white font-[Berkshire_Swash] text-center text-sm">
              {frontText}
            </p>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full flex justify-center items-center text-white text-center rounded-xl bg-black/60 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <button
            className="
              text-white 
              font-[Berkshire_Swash] 
              text-center 
              text-md 
              border-2 border-white 
              rounded-lg 
              px-4 py-2 
              hover:bg-white/20 
              transition 
              duration-300
              cursor-pointer
            "
            onClick={(e) => {
              e.stopPropagation(); 
              navigate(navigateTo); 
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
