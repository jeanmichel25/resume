import React, { useState, useEffect } from 'react';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import { RevealText, SlideIn } from './MotionComponents.tsx';

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
              'Hi, I am Jean-Michel Alturk.',
              1000
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            style={{ fontSize: '5vw' }}
            repeat={0}
          />
          <br />
          <TypeAnimation
            sequence={[
              5000,
              'A Software Engineer',
              1000
            ]}
            // wrapper="span"
            speed={50}
            cursor={false} 
            style={{ fontSize: '4vw' }}
            repeat={0}
          />
        </div>
      </header>
      <br />
      <br />
      <div className='Resume'>
        <div className='Info-block' style={{ textAlign: 'left', width: '95%' }}>
          <RevealText>
            <h1 className='Block-title'>Education</h1>
          </RevealText>
          <SlideIn>
            <h2 className='Block-text'>Aug 2019 - Dec 2023</h2>
            <h2 className='Block-subtitle'>Bachelor's in Engineering: Software Engineering</h2>
            <h2 className='Block-subtitle'>Specialized in Data Science and A.I.</h2>
            <h2 className='Block-text'>École Polytechnique Montréal</h2>
          </SlideIn>
        </div>
        <br />
        <br />
        <div className='Info-block' style={{ textAlign: 'left', width: '95%' }}>
          <RevealText>
            <h1 className='Block-title'>Work Experience</h1>
          </RevealText>
          <SlideIn>
            <h2 className='Block-text'>Aug 2023 - Dec 2023</h2>
            <h2 className='Block-subtitle'>Software Engineer</h2>
            <h2 className='Block-text'>Freely</h2>
          </SlideIn>
          <br />
          <SlideIn>
            <h2 className='Block-text'>May 2021 - Dec 2021</h2>
            <h2 className='Block-subtitle'>Engineering Co-op Intern</h2>
            <h2 className='Block-text'>TELUS</h2>
          </SlideIn>
        </div>
        <br />
        <br />
        <div className='Info-block' style={{ textAlign: 'left', width: '95%' }}>
          <RevealText>
            <h1 className='Block-title'>Hackathons</h1>
          </RevealText>
          <SlideIn>
            <h2 className='Block-text'>Sep 2019</h2>
            <h2 className='Block-subtitle'>LH Games</h2>
            <h2 className='Block-text'>École Polytechnique Montréal</h2>
          </SlideIn>
          <br />
          <SlideIn>
            <h2 className='Block-text'>Jan 2020</h2>
            <h2 className='Block-subtitle'>Hackatown </h2>
            <h2 className='Block-text'>École Polytechnique Montréal</h2>
          </SlideIn>
        </div>
        <br />
        <br />
        <div className='Info-block' style={{ textAlign: 'left', width: '95%' }}>
          <RevealText>
            <h1 className='Block-title'>School Projects</h1>
          </RevealText>
          <SlideIn>
            <h2 className='Block-text'>Sep 2023 - Dec 2023</h2>
            <h2 className='Block-subtitle'>Cloud Computing class</h2>
          </SlideIn>
          <br />
          <SlideIn>
            <h2 className='Block-text'>April 2023</h2>
            <h2 className='Block-subtitle'>Diamond price predictor</h2>
          </SlideIn>
          <br />
          <SlideIn>
            <h2 className='Block-text'>Jan 2023 – April 2023</h2>
            <h2 className='Block-subtitle'>Data visualization project</h2>
          </SlideIn>
          <br />
          <SlideIn>
            <h2 className='Block-text'>Jan 2022 – May 2022</h2>
            <h2 className='Block-subtitle'>Web/mobile app project with online capabilities</h2>
          </SlideIn>
          <br />
          <SlideIn>
            <h2 className='Block-text'>Jan 2021 – May 2021</h2>
            <h2 className='Block-subtitle'>Web Development Project</h2>
          </SlideIn>
          <br />
          <SlideIn>
            <h2 className='Block-text'>Jan 2020 – May 2020</h2>
            <h2 className='Block-subtitle'>Embedded System Project</h2>
          </SlideIn>
        </div>
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
