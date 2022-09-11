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
    <a
      href='https://github.com/sblobs'
      rel='noreferrer'
      target='_blank'
      title='Github'
      aria-label='Link to Github'
    >
      <GitHubIcon className={`${styles.githubIcon} ${styles.icon_bounce}`} aria-label='Github icon'/>
    </a>
  </div>
}

export default HomePage;
