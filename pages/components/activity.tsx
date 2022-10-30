import styles from "./../../styles/activity.module.css";

export const Activity = () => {
  return (
    <div className={`flex flex-col h-full ${styles.activity}`}>
      <div className={`${styles.activitySettings}`}>activity settings</div>

      <div className={`${styles.activityResponse}`}>
        <h1>Response</h1>
      </div>
    </div>
  );
};
