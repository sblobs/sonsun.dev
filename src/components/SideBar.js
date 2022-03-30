import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideBtn from './SideBtn';
import styles from './SideBar.module.css';

const SideBar = () => {
  const navigate = useNavigate();
  return <div className={styles.main}>
    <span className={styles.title} onClick={
      () => { navigate('/home') }
    }> Sonia Sun </span>
    <div className={styles.navBar}>
      <SideBtn onClickRoute={'/about'} text={'about'} first></SideBtn>
      <SideBtn onClickRoute={'/projects'} text={'projects'}></SideBtn>
      <SideBtn onClickRoute={'/contact'} text={'contact'}></SideBtn>
    </div>
  </div>
};

export default SideBar;
