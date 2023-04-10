import React, { useState } from "react";
import MemoizedIframe from "./HOC/MemoizedIframe";
export const ComponentA = () => {
  const [isLoading, setIsLoading] = useState(true);
  const src = "https://karkuvelpandi-portfolio.vercel.app/";
  return (
    <>
      {isLoading && <div>Loading...</div>}
      <MemoizedIframe
        src={src}
        onLoad={() => setIsLoading(false)}
        isLoading={isLoading}
      />
    </>
  );
};
