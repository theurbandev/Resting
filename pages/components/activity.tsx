import styles from "./../../styles/activity.module.css";

const activityTabList = [];
const createNewTab = () => {
  alert("new tab created");
};

export const Activity = () => {
  return (
    <div className={`flex flex-col h-full ${styles.activity}`}>
      <div className={`${styles.activitySettings}`}>
        <ul
          className={` ${styles.navTabs} nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4}`}
          id="tabs-tab"
          role="tablist"
        >
          <li
            className={`${styles.initialTab} ${styles.activeTab} nav-item" role="presentation`}
          >
            <a
              href="#tabs-home"
              className=" nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3"
              id="tabs-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-home"
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              POST Request
            </a>
          </li>
          <li className={` ${styles.newTabBttn} nav-item`} role="presentation">
            <a
              href="#tabs-profile"
              className=" nav-link block font-medium text-md leading-tight border-x-0 border-t-0 border-b-2 border-transparent py-3"
              id="tabs-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="false"
            >
              +
            </a>
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
