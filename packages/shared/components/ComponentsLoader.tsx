import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
// import "@dotlottie/react-player/dist/index.css";

interface ComponentLoaderProps {
  // Can be a URL string or an imported local JSON object
  animationData: string | Record<string, any>; 
  width?: string | number;
  height?: string | number;
  loop?: boolean;
  autoplay?: boolean;
}

export default function ComponentLoader({
  animationData,
  width = "200px",
  height = "200px",
  loop = true,
  autoplay = true,
}: ComponentLoaderProps) {
  return (
    <div 
      className="flex items-center justify-center mx-auto" 
      style={{ width, height }}
    >
      <DotLottiePlayer
        src={animationData}
        autoplay={autoplay}
        loop={loop}
      />
    </div>
  );
}