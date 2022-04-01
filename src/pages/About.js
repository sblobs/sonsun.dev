import React from 'react';
import styles from './PageLayout.module.css';
import SideBar from '../components/SideBar';
import HamburgerMenu from '../components/HamburgerMenu';
import About from '../data/AboutData';

const AboutPage = () => {
  return <div className={styles.main}>
    <div className={styles.iconWrapper}>
    </div>
    <HamburgerMenu />
    <SideBar />
    <div className={styles.content}>
      <div className={styles.title}>About</div>
      {About.desc}
    </div>
    <div className={styles.mobileFooter}></div>
  </div>
}

export default AboutPage;
