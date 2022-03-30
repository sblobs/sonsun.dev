import React from 'react';
import styles from './PageLayout.module.css';
import SideBar from '../components/SideBar';
const AboutPage = () => {
  return <div className={styles.main}>
    <SideBar />
    <div className={styles.content}>
      About...
    </div>
  </div>
}

export default AboutPage;
