import styles from "./../../styles/activity.module.css";

export const Activity = () => {
  return (
    <div className={`flex flex-col ${styles.activity}`}>
      <div className={`${styles.activitySettings}`}>activity settings</div>

      <div className={`${styles.response}`}>response</div>
    </div>
  );
};
