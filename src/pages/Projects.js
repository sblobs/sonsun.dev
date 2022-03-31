import React from 'react';
import styles from './PageLayout.module.css';
import SideBar from '../components/SideBar';
import HamburgerMenu from '../components/HamburgerMenu';

const ProjectsPage = () => {
  return <div className={styles.main}>
    <HamburgerMenu />
    <SideBar />
    <div className={styles.content}>
      Projects...
    </div>
  </div>
}

export default ProjectsPage;
