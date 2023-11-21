import Styles from "./CategoryContainer.module.css";

export default function CategoryContainer({ data, timeframe }) {
  return (
    <div className={Styles.category}>
      <div className={Styles.categoryDataContainer}>
        <div className={Styles.categoryDataContainerTitle}>
          <h2>{data.title}</h2>
          <img src="./assets/icon-ellipsis.svg" alt="Three dots" />
        </div>
        <h3>{data["timeframes"][timeframe]["current"]}</h3>
        <p>Last Week - ost</p>
      </div>
    </div>
  );
}
