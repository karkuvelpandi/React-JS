import React from "react";

const MemoizedIframe = React.memo(({ src, isLoading, onLoad }) => {
  return (
    <>
      <iframe
        title="new"
        src={src}
        onLoad={onLoad}
        style={{ display: isLoading ? "none" : "block" }}
        width="800"
        height="600"
      />
    </>
  );
});

export default MemoizedIframe;
