import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Particles from 'react-tsparticles';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import NotFoundPage from './pages/404';

import './fonts/Inter-VariableFont_slnt,wght.ttf'
import './fonts/Domine-VariableFont_wght.ttf'
import './fonts/Lato-Regular.ttf'
import './fonts/Lato-Bold.ttf'

const App = () => {
  const location = useLocation();
  const particleOptions = {
    fpsLimit: 60,
    interactivity: {
      detect_on: 'window',
      events: {
        onclick: { enable: true, mode: 'push' },
        resize: true,
        onhover: {
          enable: true,
          mode: 'connect',
          parallax: {
            enable: false,
            force: 130,
            smooth: 6,
          }
        },
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 0.7,
          size: 3,
          speed: 3
        },
        push: {
          quantity: 1,
        },
        connect: {
          distance: 50,
          links: {
            opacity: 0.2
          },
          radius: 60
        },
        repulse: { distance: 300, duration: 0.1 },
        grab: { distance: 400, line_linked: { opacity: 1 } },
      }
    },
    particles: {
      color: {
        value: '#82d3ff',
        opacity: 0.6
      },
      move: {
        bounce: false,
        direction: 'none',
        enable: true,
        out_mode: 'out',
        random: true,
        speed: 0.2,
        straight: false
      },
      number: { density: { enable: true, value_area: 100 }, value: 13 },
      opacity: {
        anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
        random: {
          enable: true,
          minimumValue: 0.3
        },
        value: 0.6
      },
      shape: {
        type: 'circle'
      },
      size: {
        random: false,
        value: 1.3
      }
    },
    retina_detect: true
  };

  return (<>
    <Particles className='particles' options={particleOptions} />
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames='fade' timeout={300}>
        <Routes location={location}>
          <Route path='/' element={<HomePage />} />
          <Route path='home' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='projects' element={<ProjectsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  </>
  );
}

export default App;
