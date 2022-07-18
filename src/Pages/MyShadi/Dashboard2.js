import React from "react";
import { Footer, Header } from "../../Components";
import DashMainContent from "../../Components/Dashboard2/DashMainContent/DashMainContent";
import DashNotifications from "../../Components/Dashboard2/DashNotifications";
import styles from "../../styles/Dashboard2/Dashboard2.module.css";

function Dashboard2() {
  return (
    <>
      <Header isProfile={true} disabled={true} />

      <div className={styles.dashboard}>
        <div className="row">
          <div className="col-lg-3">
            <DashNotifications />
          </div>
          <div className="col-lg-6">
            <DashMainContent/>
          </div>
          <div className="col-lg-3">
            <div className={styles.d_blank_box} style={{height: "467px"}}>
              {/* BOX */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard2;
