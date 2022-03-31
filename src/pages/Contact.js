import React from 'react';
import styles from './PageLayout.module.css';
import SideBar from '../components/SideBar';
import HamburgerMenu from '../components/HamburgerMenu';

const ContactPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [msg, setMsg] = React.useState('');
  // const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState('');
  const [showingError, setShowingError] = React.useState(false);
  const [showingSuccess, setShowingSuccess] = React.useState(false);

  const checkEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
  }

  // Validate input
  const sendEmail = () => {
    if (name === '') {
      setError('Please enter your name!');
      setShowingSuccess(false);
      setShowingError(true);
    } else if (msg === '') {
      setError('Please enter a message!');
      setShowingSuccess(false);
      setShowingError(true);
    } else if (!checkEmail(email)) {
      setError('Please enter a valid email!');
      setShowingSuccess(false);
      setShowingError(true);
    } else {
      setName('');
      setEmail('');
      setMsg('');
      setShowingSuccess(true);
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
      <div className={`${styles.alert} ${styles.alertSuccess}
        ${showingSuccess ? styles.alertShown : styles.alertHidden}`}
        onTransitionEnd={ () => {
          setShowingSuccess(false);
        }}>
        Message sent successfully :)
      </div>
      <div className={`${styles.alert} ${styles.alertError}
        ${showingError ? styles.alertShown : styles.alertHidden}`}
        onTransitionEnd={ () => {
          setShowingError(false);
        }}>
        {error}
      </div>
    </div>
    <div className={styles.mobileFooter}></div>
  </div>
}

export default ContactPage;
