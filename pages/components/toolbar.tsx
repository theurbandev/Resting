import styles from "./../../styles/toolbar.module.css";

export const Toolbar = () => {
  return (
    <div className="flex">
      <select className={styles.methodsContainer}>
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
        <option>UPDATE</option>
      </select>

      <input placeholder="https://googe.com" />

      <button>Send</button>
    </div>
  );
};
