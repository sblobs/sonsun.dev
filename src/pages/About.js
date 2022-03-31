import React from 'react';
import styles from './PageLayout.module.css';
import SideBar from '../components/SideBar';
import HamburgerMenu from '../components/HamburgerMenu';

const AboutPage = () => {
  return <div className={styles.main}>
    <div className={styles.iconWrapper}>
    </div>
    <HamburgerMenu />
    <SideBar />
    <div className={styles.content}>
      About page in progress
    </div>
    <div className={styles.mobileFooter}></div>
  </div>
}

export default AboutPage;
