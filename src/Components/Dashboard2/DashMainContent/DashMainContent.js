import React from 'react'
import styles from '../../../styles/Dashboard2/Dashboard2.module.css';
import DashMainProfile from './DashMainProfile';
import DashMainRecentVisitors from './DashMainRecentVisitors';


function DashMainContent() {
  return (
    <>
        <div className={styles.d_mainContent}>
        <DashMainProfile/>

        <DashMainRecentVisitors/>
        </div>
    </>
  )
}

export default DashMainContent