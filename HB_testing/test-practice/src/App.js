import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import Navbar from "./components/Navbar";
// import { Timepicker } from "react-timepicker";
import "react-timepicker/timepicker.css";
import TimePicker from "react-times";
import "react-times/css/material/default.css";
// or you can use classic theme
import "react-times/css/classic/default.css";
import Timekeeper from "react-timekeeper";
import { StarRating } from "./StarRating";
function App() {
  const [time, setTime] = useState();
  console.log(time);
  return (
    <>
      <Router>
        <Navbar />
        {/* <Timepicker militaryTime={false} onChange={(time) => setTime(time)} /> */}
        <div style={{ width: "350px" }}>
          <TimePicker
            focused // whether to show timepicker modal after rendered. default false
            withoutIcon // whether to has time icon on button, default false
            colorPalette="light" // main color, default "light"
            time={time} // initial time, default current time
            theme="material"
            // or
            // theme="classic"
            timeMode="12" // use 24 or 12 hours mode, default 24
            onTimeChange={(time) => {
              setTime(time);
            }}
            timezone="America/New_York"
            // what timezone to use, detects the user's local timezone by default
          />
        </div>
        <div>
          <Timekeeper
            time={time}
            onChange={(time) => setTime(time.formatted12)}
            // ...
            switchToMinuteOnHourSelect
          />
        </div>
        <section>
          <StarRating totalStars={5} />
        </section>
        <Routes>
          <Route path="/iframe1" element={<ComponentA />} />
          <Route path="/iframe2" element={<ComponentB />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
