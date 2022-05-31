import React from 'react';
import styles from './PageLayout.module.scss';
import SideBar from '../components/SideBar';
import HamburgerMenu from '../components/HamburgerMenu';

const ProjectsPage = () => {
  return <div className={styles.main}>
    <HamburgerMenu />
    <SideBar />
    <div className={styles.content}>
      Projects page in progress
    </div>
    <div className={styles.mobileFooter}></div>
  </div>
}

export default ProjectsPage;
