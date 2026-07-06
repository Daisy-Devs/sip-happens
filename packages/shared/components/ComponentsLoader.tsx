"use client";

import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";

interface ComponentLoaderProps {
  // Accepts a URL file path string or an imported local JSON object module
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