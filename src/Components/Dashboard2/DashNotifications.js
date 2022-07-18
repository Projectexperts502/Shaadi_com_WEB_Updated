import React from "react";
import bell from "../../assets/IMAGES/notification.png";
import girl_profile from "../../assets/IMAGES/girl_profile.jpg";
import styles from "../../styles/Dashboard2/Dashboard2.module.css";

function DashNotifications() {
  return (
    <>
      <div className={styles.d_notifications}>
        <div className={styles.dn_header}>
          <div className={styles.dn_img}>
            <img src={bell} alt="bell-img" />
          </div>
          <span>Notification</span>
        </div>

        <div className={styles.dn_item}>
          <div className={styles.dni_profile}>
            <div className={styles.dni_img}>
              <img src={girl_profile} alt="profile-img" />
            </div>
            <span>Aliza Anthony Aliza Anthony Aliza Anthony Aliza Anthony  Aliza Anthony</span>
          </div>
          <div className={styles.dni_date}>Date</div>
        </div>

        <div className={styles.dn_item}>
          <div className={styles.dni_profile}>
            <div className={styles.dni_img}>
              <img src={girl_profile} alt="profile-img" />
            </div>
            <span>Aliza Anthony Aliza Anthony Aliza Anthony Aliza Anthony  Aliza Anthony</span>
          </div>
          <div className={styles.dni_date}>Date</div>
        </div>

        <div className={styles.dn_item}>
          <div className={styles.dni_profile}>
            <div className={styles.dni_img}>
              <img src={girl_profile} alt="profile-img" />
            </div>
            <span>Aliza Anthony Aliza Anthony Aliza Anthony Aliza Anthony  Aliza Anthony</span>
          </div>
          <div className={styles.dni_date}>Date</div>
        </div>

        <div className={styles.dn_item}>
          <div className={styles.dni_profile}>
            <div className={styles.dni_img}>
              <img src={girl_profile} alt="profile-img" />
            </div>
            <span>Aliza Anthony Aliza Anthony Aliza Anthony Aliza Anthony  Aliza Anthony</span>
          </div>
          <div className={styles.dni_date}>Date</div>
        </div>

        <div className={styles.dn_button}>
          <button>View All</button>
        </div>
      </div>
    </>
  );
}

export default DashNotifications;
