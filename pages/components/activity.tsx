import styles from "./../../styles/activity.module.css";

export const Activity = () => {
  return (
    <div className={`flex flex-col h-full ${styles.activity}`}>
      <div className={`${styles.activitySettings}`}>activity settings</div>

      <div
        className={`flex flex-row flex justify-between ${styles.activityResponse}`}
      >
        <div className={` flex flex-row ${styles.responseToggles}`}>
          <h3>Body</h3>
          <h3>Cookies</h3>
          <h3>Headers</h3>
        </div>

        <div className={` flex flex-row ${styles.formatButtons}`}>
          <h3>JSON</h3>
          <h3>HTML</h3>
          <h3>Preview</h3>
          <h3>Raw</h3>
          <h3>XML</h3>
        </div>
      </div>
    </div>
  );
};
