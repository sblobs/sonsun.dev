import React from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import basicStyles from './NavBtn.module.css';
import menuStyles from './MenuBar.module.css';

const MenuBtn = ({ onClickRoute, text, first }) => {
  const navigate = useNavigate();
  return <>
    {first
      ? <div className={`${basicStyles.btn} ${menuStyles.btn_first}`}>
          <span className={`${basicStyles.btn_bounce}`} onClick={
            () => { navigate(onClickRoute) }
          }>
            {text}
          </span>
        </div>
      : <div className={`${basicStyles.btn} ${menuStyles.btn_mid}`}>
          <span className={`${basicStyles.btn_bounce}`} onClick={
              () => { navigate(onClickRoute) }
            }>
            {text}
          </span>
        </div>
    }
  </>
};

MenuBtn.propTypes = {
  onClickRoute: PropTypes.string,
  text: PropTypes.string,
  first: PropTypes.bool
}

export default MenuBtn;
