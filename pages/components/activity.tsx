import { useState } from "react";
import styles from "./../../styles/activity.module.css";

const createNewTab = () => {
  console.log("new tab created");
};

const updateTabs = () => {
  console.log("updating tabs");
};

export const Activity = () => {
  const [activeTabs, updateTabs] = useState();

  return (
    <div className={`flex flex-col h-full ${styles.activity}`}>
      <div className={`${styles.activitySettings}`}>
        <ul
          className={` ${styles.navTabs} nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4}`}
          id="tabs-tab"
          role="tablist"
        >
          <li
            id="tabs-home-tab"
            className={`${styles.initialTab} ${styles.activeTab} nav-item" font-medium text-xs leading-tight px-6 py-3`}
          >
            POST Request
          </li>
          <li
            className={`${styles.newTabBttn} nav-item font-medium text-ms leading-tight px-6 py-3`}
            onClick={createNewTab}
          >
            +
          </li>
        </ul>
      </div>

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
