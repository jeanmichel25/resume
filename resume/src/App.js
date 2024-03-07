import React, { useState, useEffect } from 'react';
import { ReactComponent as GitHubSvg } from './assets/icons/github.svg';
import { ReactComponent as LinkedInSvg } from './assets/icons/linkedin.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import { RevealText, DelayedReveal, VeryDelayedReveal, SlideIn } from './MotionComponents.tsx';
import { EducationComponent, WorkComponent, HackathonComponent, SchoolProjectsComponent } from './ResumeComponents.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-div">
          <TypeAnimation
            sequence={[
              'Hi,',
              1000,
              'Hi, I am Jean-Mochel',
              500,
              'Hi, I am Jean-Michel.',
              1000
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            className="large-text"
            repeat={0}
          />
          <br />
          <TypeAnimation
            sequence={[
              5000,
              'A Software Engineer',
              1000
            ]}
            speed={50}
            cursor={false} 
            className="small-text"
            repeat={0}
          />
        </div>
        <div className='svg-container'>
          {/* <p className='links'>Links:</p> */}
          <DelayedReveal>
            <a href="https://github.com/jeanmichel25" target="_blank" rel="noreferrer">
              <GitHubSvg className="github"/>
            </a>
          </DelayedReveal>
          <VeryDelayedReveal>
            <a href="https://www.linkedin.com/in/jean-michel-alturk/" target="_blank" rel="noreferrer">
              <LinkedInSvg className="linkedin"/>
            </a>
          </VeryDelayedReveal>
        </div>
      </header>
      <br />
      <br />
      <div className='Resume'>
        <EducationComponent />
        <br />
        <br />
        <WorkComponent />
        <br />
        <br />
        <HackathonComponent />
        <br />
        <br />
        <SchoolProjectsComponent />
        <br />
        <br />
        <div className='Info-block' style={{ textAlign: 'left', width: '95%' }}>
          <RevealText>
            <h1 className='Block-title'>Personal Projects</h1>
          </RevealText>
          <SlideIn>
            <h2 className='Block-text'>Dec 2023 - Present</h2>
            <h2 className='Block-subtitle'>Social scheduler application</h2>
          </SlideIn>
          <br />
          <SlideIn>
            <h2 className='Block-text'>March 2024</h2>
            <h2 className='Block-subtitle'>This Web App 😊</h2>
          </SlideIn>
        </div>
      </div>
    </div>
  );
}

export default App;
