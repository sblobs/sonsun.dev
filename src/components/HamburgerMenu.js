import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './HamburgerMenu.module.css';

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
          classes={{ paper: styles.menuPaper }}
        >
          <div className={styles.menuItem} onClick={ () => {
            handleClose();
            navigate('/about')
          } }>About</div>
          <div className={styles.menuItem} onClick={ () => {
            handleClose();
            navigate('/projects')
          } }>Projects</div>
          <div className={styles.menuItem} onClick={ () => {
            handleClose();
            navigate('/contact')
          } }>Contact</div>
        </Menu>
      </div>
    </div>
  </div>
};

export default HamburgerMenu;
