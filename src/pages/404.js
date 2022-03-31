import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import HamburgerMenu from '../components/HamburgerMenu';
import styles from './PageLayout.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return <div className={styles.main}>
    <HamburgerMenu />
    <SideBar />
    <div className={styles.content}>
      Oh no, this page doesn&apos;t exist! &gt;_&lt; <br />
      Click&nbsp;
      <span className={styles.homelink} onClick={
        () => { navigate('/home') }
      }>
        here
      </span>
      &nbsp;to return to the homepage.
    </div>
  </div>
}

export default NotFoundPage;
