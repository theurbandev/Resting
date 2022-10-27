import styles from "./../../styles/toolbar.module.css";

export const Toolbar = () => {
  return (
    <div>
      <select className={styles.methodsContainer}>
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
        <option>UPDATE</option>
      </select>
    </div>
  );
};
