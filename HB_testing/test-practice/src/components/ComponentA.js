import React, { useState } from "react";
import CacheIframe from "./cache/CacheIframe";
export const ComponentA = () => {
  const [isLoading, setIsLoading] = useState(true);
  const src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.19470236878!2d78.05278274362162!3d9.917829586682975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1681206244175!5m2!1sen!2sin"
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
