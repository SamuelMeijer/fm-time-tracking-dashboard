import { useState } from "react";
import "./App.css";
import data from "./data/data.json";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [jsonData, setJsonData] = useState(data);
  const [timeframe, setTimeframe] = useState("daily");

  return (
    <>
      <main>
        <div className="profile-container">
          <div className="profile-container-top">
            <img src="./assets/image-jeremy.png" alt="Profile picture" />
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
          <div className="profile-container-bot">
            <ul className="timeframe-toggler">
              <li>Daily</li>
              <li>Weekly</li>
              <li>Monthly</li>
            </ul>
          </div>
        </div>
        <div className="category">
          <p>CATEGORY</p>
          <h2>23hrs</h2>
          <p>Last Week - 25hrs</p>
        </div>
        <div className="category">
          <p>CATEGORY</p>
          <h2>23hrs</h2>
          <p>Last Week - 25hrs</p>
        </div>
        <div className="category">
          <p>CATEGORY</p>
          <h2>23hrs</h2>
          <p>Last Week - 25hrs</p>
        </div>
        <div className="category">
          <p>CATEGORY</p>
          <h2>23hrs</h2>
          <p>Last Week - 25hrs</p>
        </div>
        <div className="category">
          <p>CATEGORY</p>
          <h2>23hrs</h2>
          <p>Last Week - 25hrs</p>
        </div>
        <div className="category">
          <p>CATEGORY</p>
          <h2>23hrs</h2>
          <p>Last Week - 25hrs</p>
        </div>
      </main>
      {/* TODO: Fix info in footer */}
      <footer className="attribution">
        <p>
          Challenge by {"Samuel Meijer"}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
