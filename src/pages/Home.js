import React from 'react';
import styles from './Home.module.css';
import MenuBar from '../components/MenuBar';
const HomePage = () => {
  return <div className={styles.main}>
    <div className={styles.title}>
      Sonia Sun
    </div>
    <div className={styles.content}>
      penultimate blah blah
    </div>
    <MenuBar />
  </div>
}

export default HomePage;
