import React from 'react';
import styles from './AboutData.module.scss';

const About = {
  desc: <>Hi! I&apos;m Sonia, a penultimate year computer science and media
  arts student at UNSW. In my spare time, I enjoy knitting and learning
  to make music.</>,
  links: <div className={styles.linkGroup}>
    <div>
      ☆ Github:&nbsp;
      <a
        href='https://github.com/sblobs'
        rel='noreferrer'
        target='_blank'
        title='Github'
        aria-label='Link to Github'
      >
        github.com/sblobs
      </a>
    </div>
    <div>
      ☆ Itch.io:&nbsp;
      <a
        href='https://sblobs.itch.io/'
        rel='noreferrer'
        target='_blank'
        title='Itch.io'
        aria-label='Link to Itch.io page'
      >
        sblobs.itch.io
      </a>
    </div>
    <div>☆ Email: sonsun.contact@gmail.com</div>
  </div>
}

export default About;
