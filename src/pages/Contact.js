import React from 'react';
import pageStyles from './PageLayout.module.scss';
import contactStyles from './Contact.module.scss';
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
  const [timeoutHandles, setTimeoutHandles] = React.useState([]);

  // Check email input
  const checkEmail = (e) => {
    return String(e)
      .toLowerCase()
      .match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
  }

  // Validate input and send email if input is valid
  const sendEmail = async () => {
    if (name === '') {
      setError('Please enter your name');
      handleErrorShow();
    } else if (msg === '') {
      setError('Please enter a message');
      handleErrorShow();
    } else if (!checkEmail(email)) {
      setError('Please enter a valid email');
      handleErrorShow();
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
          handleSuccessShow();
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  // Show alerts
  const handleErrorShow = () => {
    setShowingError(true);
    timeoutHandles.forEach((item) => {
      clearTimeout(item);
    })
    const t = setTimeout(() => {
      setTimeoutHandles([]);
      setShowingSuccess(false);
      setShowingError(false);
    }, 5000);
    setTimeoutHandles([...timeoutHandles, t]);
  }

  const handleSuccessShow = () => {
    setShowingSuccess(true);
    timeoutHandles.forEach((item) => {
      clearTimeout(item);
    })
    const t = setTimeout(() => {
      setTimeoutHandles([]);
      setShowingError(false);
      setShowingSuccess(false);
    }, 5000);
    setTimeoutHandles([...timeoutHandles, t]);
  }

  return <div className={pageStyles.main}>
    <HamburgerMenu />
    <SideBar />
    <div className={pageStyles.content}>
      <div className={pageStyles.title}>Contact</div>
      Your name <br />
      <input
        className={contactStyles.inputField}
        name='name'
        type='text'
        value={name}
        onChange={ e => setName(e.target.value) }
      />
      Your email <br />
      <input
        className={contactStyles.inputField}
        name='email'
        type='email'
        value={email}
        onChange={ e => setEmail(e.target.value) }
      />
      Message <br />
      <textarea
        className={contactStyles.inputField}
        name='message'
        type='text'
        value={msg}
        onChange={ e => setMsg(e.target.value) }
      />
      <br />
      <div className={contactStyles.sendWrapper}>
        <button className={contactStyles.sendBtn} onClick={sendEmail}>
          Send
        </button>
        {loading &&
        <div className={contactStyles.loading}>
          <CircularProgress size={20} color='inherit'/>
        </div>}

        <div className={`${contactStyles.alert} ${contactStyles.alertSuccess}
          ${showingSuccess
            ? contactStyles.alertShown
            : contactStyles.alertHidden}`
          }>
          <div className={contactStyles.alertMsg}>
            Message sent successfully :)
          </div>
        </div>
        <div className={`${contactStyles.alert} ${contactStyles.alertError}
          ${showingError
            ? (contactStyles.alertShown)
            : contactStyles.alertHidden}`
          }>
          <div className={contactStyles.alertMsg}>
            <ErrorOutlineIcon
              className={contactStyles.errorIcon}
              sx={{ fontSize: 20 }}/>
            {error}
          </div>
        </div>
      </div>
    </div>
    <div className={pageStyles.mobileFooter}></div>
  </div>
}

export default ContactPage;
