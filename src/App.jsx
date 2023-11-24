import { useState } from "react";
import "./App.css";
import data from "./data/data.json";
import CategoryContainer from "./components/CategoryContainer";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [jsonData, setJsonData] = useState(data);
  const [timeframeState, setTimeframeState] = useState("daily");

  function handleOnClick(event) {
    event.preventDefault();

    // Update state based on which timeframe is selected
    if (event.target.tagName === "LI") {
      switch (event.target.innerText) {
        case "Daily":
          setTimeframeState("daily");
          break;
        case "Weekly":
          setTimeframeState("weekly");
          break;
        case "Monthly":
          setTimeframeState("monthly");
      }
    }
  }

  return (
    <>
      <main>
        <div className="profile-container">
          <div className="profile-container-top">
            <img src="./assets/image-jeremy.png" alt="Profile picture" />
            <div className="profile-container-top-info">
              <p>Report for</p>
              <h1>Jeremy Robson</h1>
            </div>
          </div>
          <div className="profile-container-bot">
            <ul className="timeframe-toggler" onClick={handleOnClick}>
              <li
                className={
                  timeframeState === "daily" ? "timeframe-selected" : null
                }
              >
                Daily
              </li>
              <li
                className={
                  timeframeState === "weekly" ? "timeframe-selected" : null
                }
              >
                Weekly
              </li>
              <li
                className={
                  timeframeState === "monthly" ? "timeframe-selected" : null
                }
              >
                Monthly
              </li>
            </ul>
          </div>
        </div>

        {jsonData && timeframeState ? (
          jsonData.map((element, index) => {
            return (
              <CategoryContainer
                data={element}
                timeframe={timeframeState}
                key={index}
              />
            );
          })
        ) : (
          <></>
        )}
      </main>

      <footer className="attribution">
        <p>
          Challenge by &nbsp;
          <a
            href="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/SamuelMeijer/fm-time-tracking-dashboard">
            Samuel Meijer
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
