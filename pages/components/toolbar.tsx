import styles from "./../../styles/toolbar.module.css";

export const Toolbar = () => {
  return (
    <div className={`flex ${styles.toolbar}`}>
      <select
        className={`basis-1/12 text-lg font-semibold ${styles.methodsContainer}`}
      >
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
        <option>UPDATE</option>
      </select>

      <input
        className={`w-96 flex-1 ${styles.searchBar}`}
        placeholder="https://googe.com"
      />

      <button className={`flex-none text-lg font-bold ${styles.sendButton}`}>
        Send
      </button>
    </div>
  );
};
