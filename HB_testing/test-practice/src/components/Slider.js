import React, { useState, useEffect } from "react";

export const Slider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % children.length);
    }, 3000);
    console.log("test");

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!children) return null;
  return (
    <>
      <div className="h-20 w-20 bg-slate-400 ">
        {children.map((child, index) => {
          return index === activeTab ? child : null;
        })}
      </div>
      <div>
        {[...Array(children.length)].map((a, i) => {
          return (
            <p key={i} onClick={() => setActiveTab(i + 1)}>
              {i + 1}
            </p>
          );
        })}
      </div>
    </>
  );
};

// usage
{
  /* <Slider>
            {array.map((tab) => (
              <div className="h-full w-36 bg-slate-400">
                <p>{tab.title}</p>
                <p>{tab.instruction}</p>
              </div>
            ))}
          </Slider> */
}
