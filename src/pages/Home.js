import React from 'react';
import styles from './Home.module.css';
import MenuBar from '../components/MenuBar';

const HomePage = () => {
  return <div className={styles.main}>
    <div className={styles.textBanner}>
      <div className={styles.title}>
        Sonia Sun
      </div>
      <div className={styles.content}>
        Penultimate year computer science/media arts student at UNSW.
      </div>
      <MenuBar />
    </div>
  </div>
}

export default HomePage;
