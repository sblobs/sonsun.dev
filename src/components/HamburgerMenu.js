import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <div className={styles.main}>
    <div className={styles.wrapper}>
      <div className={styles.title} onClick={
        () => { navigate('/home') }
      }> Sonia Sun </div>
      <div className={styles.iconWrapper}>
        <MenuIcon
          id="menu-button"
          aria-controls={open ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ fontSize: 23 }}
        />
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'menu-button',
          }}
          classes={{
            paper: styles.menuPaper,
            list: styles.menuList
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <div className={`${styles.menuItem} ${styles.firstItem}`}>
            <span className={`${styles.bounce}`} onClick={ () => {
              handleClose();
              navigate('/about')
            } }>
              About
            </span>
          </div>
          <div className={styles.menuItem}>
            <span className={`${styles.bounce}`} onClick={ () => {
              handleClose();
              navigate('/projects')
            } }>
              Projects
            </span>
          </div>
          <div className={styles.menuItem}>
            <span className={`${styles.bounce}`} onClick={ () => {
              handleClose();
              navigate('/contact')
            } }>
              Contact
            </span>
          </div>
        </Menu>
      </div>
    </div>
  </div>
};

export default HamburgerMenu;
