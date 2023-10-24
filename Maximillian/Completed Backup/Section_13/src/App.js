import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import DemoComp from "./components/DemoComp";
import Button from "./components/Button";
function App() {
  const [title, setTitle] = useState("Demo Title");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allow, setAllow] = useState(false);
  console.log("App running");
  const toggleParaHandler = useCallback(() => {
    if (allow) setShowParagraph((showPara) => !showPara);
  }, [allow]);
  const UpdateTitle = () => {
    setTitle("New Title");
  };
  return (
    <div>
      <div>
        <h1>Hi there!</h1>
        {/* {showParagraph && <p>Paragraph content</p>} */}
        <DemoComp title={title} items={useMemo(() => [3, 4, 2, 1], [])} />
      </div>
      {/* <Button onClick={toggleParaHandler}>Toggle</Button> */}
      <Button onClick={UpdateTitle}>Update Title</Button>
    </div>
  );
}

export default App;
