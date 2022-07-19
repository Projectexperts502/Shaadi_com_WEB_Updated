import React from "react";
import styles from "../../../styles/Dashboard2/Dashboard2.module.css";
import DashRecentVisitorsCard from "./DashRecentVisitorsCard";

function DashMainRecentVisitors() {
  return (
    <>
      <div className={styles.dm_visitors}>
        <div className={styles.dmv_header}>
          <h1>Recent Visitors</h1>
          <div>08</div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <DashRecentVisitorsCard />
          </div>
          <div className="col-lg-4">
            <DashRecentVisitorsCard />
          </div>
          <div className="col-lg-4">
            <DashRecentVisitorsCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashMainRecentVisitors;
