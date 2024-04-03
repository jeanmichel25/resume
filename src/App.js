import React, { useRef  } from 'react';
import { ReactComponent as GitHubSvg } from './assets/icons/github.svg';
import { ReactComponent as LinkedInSvg } from './assets/icons/linkedin.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import { DelayedReveal, VeryDelayedReveal, WriteText, Languages } from './MotionComponents.tsx';
import { EducationComponent, WorkComponent, HackathonComponent, ProjectsComponent, ExtracurricularComponent } from './ResumeComponents.tsx';
import { LottieScrollDown } from './LottieComponents.tsx';

function App() {
  const resumeRef = useRef(null);
  const aboutMeRef = useRef(null);

  const scrollToResume = () => {
    resumeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-div">
          <TypeAnimation
            sequence={[
              'Hi :)',
              1000,
              'I am Jean-Mochel',
              300,
              'I am Jean-Michel',
              1000
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            className="large-text"
            repeat={0}
          />
          <br />
          <TypeAnimation
            sequence={[
              3700,
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
        <div className='scroll-down' onClick={scrollToResume}>
          <VeryDelayedReveal>
            <LottieScrollDown />
          </VeryDelayedReveal>
        </div>
      </header>
      <br />
      <br />
      <div className='Resume' ref={resumeRef}>
        <EducationComponent />
        <br />
        <br />
        <WorkComponent />
        <br />
        <br />
        <HackathonComponent />
        <br />
        <br />
        <ProjectsComponent />
        <br />
        <br />
      </div>
      <br />
      <br />
      <div className='About-me' ref={aboutMeRef}>
        <div className='text-div'>
          <WriteText />
        </div>
        <div className='text-div'>
          <Languages />
        </div>
      </div>
    </div>
  );
}

export default App;
