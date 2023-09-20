import React, { useState } from "react";
import CacheIframe from "./cache/CacheIframe";
export const ComponentB = () => {
  const [isLoading, setIsLoading] = useState(true);
  const src = "https://karkuvelpandi-portfolio.vercel.app/";
  return (
    <>
      {isLoading && <div>Loading...</div>}
      <CacheIframe
        src={src}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </>
  );
};
