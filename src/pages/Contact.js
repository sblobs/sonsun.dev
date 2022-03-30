import React from 'react';
import styles from './PageLayout.module.css';
import SideBar from '../components/SideBar';
const ContactPage = () => {
  return <div className={styles.main}>
    <SideBar />
    <div className={styles.content}>
      Contact form here
    </div>
  </div>
}

export default ContactPage;
