/* eslint-disable react/prop-types */
import Styles from "./CategoryContainer.module.css";

export default function CategoryContainer({ data, timeframe }) {
  let textOutput = "";

  switch (timeframe) {
    case "daily":
      textOutput = "Yesterday";
      break;
    case "weekly":
      textOutput = "Last Week";
      break;
    case "monthly":
      textOutput = "Last Month";
      break;
  }
  return (
    <div className={Styles.category}>
      <div className={Styles.categoryDataContainer}>
        {/* TODO: Make background dynamicly change based on category */}
        <div className={Styles.categoryDataContainerTitle}>
          <h2>{data.title}</h2>
          <img src="./assets/icon-ellipsis.svg" alt="Three dots" />
        </div>
        <h3>{data["timeframes"][timeframe]["current"]}</h3>
        <p>
          {textOutput} - {data["timeframes"][timeframe]["previous"]}
        </p>
      </div>
    </div>
  );
}
