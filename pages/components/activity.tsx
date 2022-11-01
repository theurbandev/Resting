import styles from "./../../styles/activity.module.css";

export const Activity = () => {
  return (
    <div className={`flex flex-col h-full ${styles.activity}`}>
      <div className={`${styles.activitySettings}`}>
        <ul
          className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
          id="tabs-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-home"
              className=" nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent"
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
          <li className="nav-item" role="presentation">
            <a
              href="#tabs-profile"
              className=" nav-link block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent focus:border-transparent"
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
        <div className="tab-content" id="tabs-tabContent">
          <div
            className="tab-pane fade show active"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
          >
            Tab 1 content
          </div>
          <div
            className="tab-pane fade"
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            Tab 2 content
          </div>
          <div
            className="tab-pane fade"
            id="tabs-messages"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            Tab 3 content
          </div>
          <div
            className="tab-pane fade"
            id="tabs-contact"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab"
          >
            Tab 4 content
          </div>
        </div>
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
