import Styles from "./CategoryContainer.module.css";

export default function CategoryContainer() {
  return (
    <div className={Styles.category}>
      <div className={Styles.categoryDataContainer}>
        <div className={Styles.categoryDataContainerTitle}>
          <p>CATEGORY</p>
          <img src="./assets/icon-ellipsis.svg" alt="Three dots" />
        </div>
        <h2>23hrs</h2>
        <p>Last Week - 25hrs</p>
      </div>
    </div>
  );
}
