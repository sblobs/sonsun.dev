import React from 'react';
import MenuBtn from './MenuBtn';
import styles from './MenuBar.module.scss';

const MenuBar = () => {
  return <div className={styles.main}>
    <div className={styles.navBar}>
      <MenuBtn onClickRoute={'/about'} text={'about'} first></MenuBtn>
      <MenuBtn onClickRoute={'/projects'} text={'projects'}></MenuBtn>
      <MenuBtn onClickRoute={'/contact'} text={'contact'}></MenuBtn>
    </div>
  </div>
};

export default MenuBar;
