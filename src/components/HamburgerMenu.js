import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
      />
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
      >
      <MenuItem onClick={ () => {
        handleClose();
        navigate('/about')
      } }>About</MenuItem>
      <MenuItem onClick={ () => {
        handleClose();
        navigate('/projects')
      } }>Projects</MenuItem>
      <MenuItem onClick={ () => {
        handleClose();
        navigate('/Contact')
      } }>Contact</MenuItem>
      </Menu>
    </div>
  </div>
};

export default HamburgerMenu;
