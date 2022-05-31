import React from 'react';
import styles from './Home.module.scss';
import MenuBar from '../components/MenuBar';

const HomePage = () => {
  return <div className={styles.main}>
    <div className={styles.title}>
      Hi! I&apos;m Sonia :)
    </div>
    <div className={styles.content}>
      Penultimate year computer science/ media arts student at UNSW.
    </div>
    <MenuBar />
  </div>
}

export default HomePage;
