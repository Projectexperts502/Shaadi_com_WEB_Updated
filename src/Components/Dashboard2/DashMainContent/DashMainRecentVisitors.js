import React from "react";
import styles from "../../../styles/Dashboard2/Dashboard2.module.css";

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
            {/* <div className={styles.dmv_card}>
              <div className={styles.dmvc_online}>
                Online <span></span>
              </div>
            </div> */}
            Card 1
          </div>
          <div className="col-lg-4">Card 2</div>
          <div className="col-lg-4">Card 3</div>
        </div>
      </div>
    </>
  );
}

export default DashMainRecentVisitors;
