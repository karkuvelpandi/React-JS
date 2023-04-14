import React, { useRef, useEffect, useState } from "react";
import { IFrame } from "remotion";

const CacheIframe = ({ src, isLoading, setIsLoading }) => {
  const [iframeDoc, setIframeDoc] = useState(null);
  const iframeRef = useRef();
  const cacheOnload = () => {
    setIsLoading(false);
    setIframeDoc(iframeRef.current.contentWindow.document);
    console.log(iframeRef.current.contentWindow.document);
  };
  useEffect(() => {
    if (!iframeDoc) {
      iframeRef.current.setAttribute("src", `${src}`);
    }
  }, [iframeDoc]);

  return iframeDoc ? (
    <>{iframeDoc}</>
  ) : (
    <iframe
      ref={iframeRef}
      // src={src}
      title="new"
      loading="eager"
      onLoad={cacheOnload}
      style={{ display: isLoading ? "none" : "block" }}
      width="800"
      height="600"
    ></iframe>
  );
};

export default CacheIframe;
