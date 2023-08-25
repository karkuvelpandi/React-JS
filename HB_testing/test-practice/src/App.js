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
import ICSfile from "./ICSfile";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Slider } from "./components/Slider";
import { SearchBar } from "./components/SearchBar/SearchBar";
import data from "./components/SearchBar/data.json";
function App() {
  const [time, setTime] = useState();
  const [searchResult, setSearchResult] = useState([]);
  console.log(time);
  let array = [
    {
      title: "Tab 1",
      instruction: "Instruction for tab 1",
    },
    {
      title: "Tab 2",
      instruction: "Instruction for tab 2",
    },
  ];
  const handleSearch = (keyword) => {
    const newData = data.filter((singleData) => {
      return singleData.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setSearchResult(newData);
  };

  // "2023-07-13T12:40:00+05:30"
  // "2023-07-14T10:10:00+05:30"
  // "2023-07-14T10:30:00+05:30"
  return (
    <div>
      <Router>
        <Navbar />
        <div style={{ width: "350px" }} className="h-screen">
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
        <div className="h-auto">
          <Timekeeper
            time={time}
            onChange={(time) => setTime(time.formatted12)}
            // ...
            switchToMinuteOnHourSelect
          />
        </div>
        <section className="h-auto">
          <StarRating totalStars={5} />
        </section>
        <section className="h-auto">
          <ICSfile />
        </section>
        <section className="h-screen">
          <AddToCalendarButton
            name="Title"
            options="'Apple','Google'"
            startDate="2023-06-12"
          ></AddToCalendarButton>
        </section>
        <section>
          <Slider>
            {array.map((tab) => (
              <div className="h-full w-36 bg-slate-400">
                <p>{tab.title}</p>
                <p>{tab.instruction}</p>
              </div>
            ))}
          </Slider>
        </section>

        <section className="h-screen w-screen flex flex-col gap-3 justify-center items-center">
          {data.items
            .sort((item1, item2) => {
              // Handling empty or null userAssignedDateTime
              if (!item1.userAssignedDateTime && !item2.userAssignedDateTime) {
                return 0; // No preference for order
              }
              if (!item1.userAssignedDateTime) {
                return 1; // a is considered greater and placed after b
              }
              if (!item2.userAssignedDateTime) {
                return -1; // b is considered greater and placed after a
              }
              // Sort by date when both userAssignedDateTime values are present
              return (
                new Date(item1.userAssignedDateTime) -
                new Date(item2.userAssignedDateTime)
              );
            })
            // .sort((a, b) => {
            //   const dateA = a.userAssignedDateTime
            //     ? new Date(a.userAssignedDateTime)
            //     : null;
            //   const dateB = b.userAssignedDateTime
            //     ? new Date(b.userAssignedDateTime)
            //     : null;

            //   if (!dateA && !dateB) {
            //     return 0; // No preference for order when both values are empty or null
            //   }
            //   if (!dateA) {
            //     return 1; // a is considered greater and placed after b
            //   }
            //   if (!dateB) {
            //     return -1; // b is considered greater and placed after a
            //   }
            //   // Sort by date when both userAssignedDateTime values are present
            //   const timeDiff = dateA.getTime() - dateB.getTime();
            //   if (timeDiff === 0) {
            //     // If dates are equal, preserve original order
            //     return 0;
            //   }
            //   if (a.userAssignedDateTime && b.userAssignedDateTime) {
            //     // If both dates are present, compare by date
            //     return timeDiff;
            //   }
            //   // If only one date is present, prioritize the item with non-null date
            //   return a.userAssignedDateTime ? -1 : 1;
            // })
            .map((item, index) => {
              return (
                <div key={index} className="w-44 h-24 bg-black text-white ">
                  <h1>Date</h1>
                  <span>{item.userAssignedDateTime}</span>
                </div>
              );
            })}
        </section>

        <Routes>
          <Route path="/iframe1" element={<ComponentA />} />
          <Route path="/iframe2" element={<ComponentB />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// sort final with typescript

// .sort(
//   (item1, item2) => {
//     // Handling empty or null userAssignedDateTime
//     if (
//       !item1.userAssignedDateTime &&
//       !item2.userAssignedDateTime
//     ) {
//       return 0; // No preference for order
//     }
//     if (!item1.userAssignedDateTime) {
//       return 1; // a is considered greater and placed after b
//     }
//     if (!item2.userAssignedDateTime) {
//       return -1; // b is considered greater and placed after a
//     }
//     // Sort by date when both userAssignedDateTime values are present
//     const dateA: Date = new Date(
//       item1.userAssignedDateTime
//     );
//     const dateB: Date = new Date(
//       item2.userAssignedDateTime
//     );
//     console.log(dateA.getTime(), dateB.getTime());
//     return dateA.getTime() - dateB.getTime();
//   }
// );
