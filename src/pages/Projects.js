import React from 'react';
import styles from './PageLayout.module.css';
import SideBar from '../components/SideBar';
const ProjectsPage = () => {
  return <div className={styles.main}>
    <SideBar />
    <div className={styles.content}>
      Projects...
    </div>
  </div>
}

export default ProjectsPage;
