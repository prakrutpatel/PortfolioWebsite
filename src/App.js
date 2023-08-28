import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';
import WideScreenHero from './Slides/WideScreen/HeroSlide/Hero';
import WideScreenWork from './Slides/WideScreen/WorkSlide/Work';
import WideScreenSkills from './Slides/WideScreen/Skills';
import WideScreenResume from './Slides/WideScreen/ContactSlide/Resume';
import WideScreenContact from './Slides/WideScreen/ContactSlide/Contact';
import MobileHero from './Slides/Mobile/HeroSlide/Hero';
import MobileWork from './Slides/Mobile/WorkSlide/Work';
import MobileSkills from './Slides/Mobile/Skills';
import MobileContact from './Slides/Mobile/ContactSlide/Contact';
import MobileResume from './Slides/Mobile/ContactSlide/Resume';
import MadeReveal from './Slides/Mobile/ContactSlide/MadeReveal';
import './Assets/index.css';
import "./App.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";


const firebaseConfig = {
  apiKey: "AIzaSyA4InMw2eUAoERy-FUaH0fdPla5xiu3wsI",
  authDomain: "portfolio-b7e7c.firebaseapp.com",
  databaseURL: "https://portfolio-b7e7c-default-rtdb.firebaseio.com",
  projectId: "portfolio-b7e7c",
  storageBucket: "portfolio-b7e7c.appspot.com",
  messagingSenderId: "10608367928",
  appId: "1:10608367928:web:64af35a9fb24844bc7c9cd",
  measurementId: "G-S88GRLH9CL"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    document.getElementById("backgroundMusic").play().catch((error) => {
      document.addEventListener('click', () => {
        
        document.getElementById("backgroundMusic").play()
      }, { once: true } )})
  }

  
  render() {
    return (
      <React.Fragment>
          <audio id="backgroundMusic">
              <source src="https://firebasestorage.googleapis.com/v0/b/portfolio-b7e7c.appspot.com/o/Akari.mp3?alt=media&token=e8a00eb4-3294-4eec-8311-df2481cdbd49" type="audio/mpeg" />
          </audio>
        <MediaQuery query="(min-device-width: 1224px)">
          <WideScreenHero />
          <WideScreenWork />
          <WideScreenSkills />
          <WideScreenContact />
          <WideScreenResume />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileHero />
          <MobileWork />
          <MobileSkills />
          <MobileContact />
          <MobileResume />
          <MadeReveal />
        </MediaQuery>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
