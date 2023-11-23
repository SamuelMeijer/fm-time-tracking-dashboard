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

  let categoryName = "";
  switch (data.title) {
    case "Work":
      categoryName = "work";
      break;
    case "Play":
      categoryName = "play";
      break;
    case "Study":
      categoryName = "study";
      break;
    case "Exercise":
      categoryName = "exercise";
      break;
    case "Social":
      categoryName = "social";
      break;
    case "Self Care":
      categoryName = "self-care";
      break;
  }

  return (
    <div className={`${Styles.category} ${Styles[categoryName]}`}>
      <div
        className={Styles.categoryHeader}
        style={{ backgroundImage: `url(./assets/icon-${categoryName}.svg)` }}
      ></div>
      <div className={Styles.categoryDataContainer}>
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
