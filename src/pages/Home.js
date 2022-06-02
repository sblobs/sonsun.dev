import React from 'react';
import styles from './Home.module.scss';
import MenuBar from '../components/MenuBar';
import GitHubIcon from '@mui/icons-material/GitHub';

const HomePage = () => {
  return <div className={styles.main}>
    <div className={styles.title}>
      Hi! I&apos;m Sonia :)
    </div>
    <div className={styles.content}>
      Penultimate year computer science/ media arts student at UNSW.
    </div>
    <MenuBar />
    <GitHubIcon />
  </div>
}

export default HomePage;
