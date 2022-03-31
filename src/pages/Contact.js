import React from 'react';
import styles from './PageLayout.module.css';
import SideBar from '../components/SideBar';
import HamburgerMenu from '../components/HamburgerMenu';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ContactPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [error, setError] = React.useState('');
  const [showingError, setShowingError] = React.useState(false);
  const [showingSuccess, setShowingSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const checkEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
  }

  // Validate input
  const sendEmail = async () => {
    if (name === '') {
      setError('Please enter your name');
      setShowingSuccess(false);
      setShowingError(true);
    } else if (msg === '') {
      setError('Please enter a message');
      setShowingSuccess(false);
      setShowingError(true);
    } else if (!checkEmail(email)) {
      setError('Please enter a valid email');
      setShowingSuccess(false);
      setShowingError(true);
    } else {
      setLoading(true);
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, msg }),
      }
      try {
        const res = await fetch('/.netlify/functions/sendmail', request);
        if (res.status === 200) {
          setName('');
          setEmail('');
          setMsg('');
          setLoading(false);
          setShowingSuccess(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return <div className={styles.main}>
    <HamburgerMenu />
    <SideBar />
    <div className={styles.content}>
      <div className={styles.title}>Contact</div>
      Your name <br />
      <input
        className={styles.inputField}
        name='name'
        type='text'
        value={name}
        onChange={ e => setName(e.target.value) }
      />
      Your email <br />
      <input
        className={styles.inputField}
        name='email'
        type='email'
        value={email}
        onChange={ e => setEmail(e.target.value) }
      />
      Your message <br />
      <textarea
        className={styles.inputField}
        name='message'
        type='text'
        value={msg}
        onChange={ e => setMsg(e.target.value) }
      />
      <br />
      <button className={styles.sendBtn} onClick={sendEmail}>Send</button>
      {loading && <div className={styles.loading}>
        <CircularProgress size={20} color='inherit'/>
      </div>}

      <div className={`${styles.alert} ${styles.alertSuccess}
        ${showingSuccess ? styles.alertShown : styles.alertHidden}`}
        onTransitionEnd={ () => {
          setShowingSuccess(false);
        }}>
        <div className={styles.alertMsg}>
          Message sent successfully :)
        </div>
      </div>
      <div className={`${styles.alert} ${styles.alertError}
        ${showingError ? (styles.alertShown) : styles.alertHidden}`}
        onTransitionEnd={ () => {
          setShowingError(false);
        }}>
        <div className={styles.alertMsg}>
          <ErrorOutlineIcon className={styles.errorIcon} sx={{ fontSize: 20 }}/>
          {error}
        </div>
      </div>

    </div>
    <div className={styles.mobileFooter}></div>
  </div>
}

export default ContactPage;
