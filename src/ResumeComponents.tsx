import React, { useState, useEffect } from 'react';
import './App.css';
import { RevealText, DelayedReveal, VeryDelayedReveal, SlideIn } from './MotionComponents.tsx';

export function EducationComponent() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className='Info-block' style={{ textAlign: 'left', marginLeft: '20px' }}>
          <RevealText>
            <h1 className='Block-title'>Education</h1>
          </RevealText>
          <SlideIn>
            <div className='resume-block'>
              <div  className='Clickable-block' onClick={() => setIsExpanded(!isExpanded)}>
                <h2 className='Block-text'>Aug 2019 - Dec 2023</h2>
                <h2 className='Block-subtitle'>B.Eng in Software Engineering</h2>
                <h2 className='Block-subtitle'>Specialized in Data Science and A.I.</h2>
                <h2 className='Block-text'>École Polytechnique Montréal</h2>
              </div>
              <div className={`Details-block ${isExpanded ? 'expanded' : ''}`}>
                <h1 className='Detail-block-title'>Achievements</h1>
                <ul>
                  <li>Excellence bursary in Software Engineering, Computer Engineering and Electrical Engineering</li>
                </ul>
              </div>
            </div>
          </SlideIn>
        </div>
    );
}

export function WorkComponent() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);

    return (
        <div className='Info-block' style={{ textAlign: 'left', marginLeft: '20px' }}>
          <RevealText>
            <h1 className='Block-title'>Work Experience</h1>
          </RevealText>
          <SlideIn>
            <div className='resume-block'>
              <div  className='Clickable-block' onClick={() => setIsExpanded(!isExpanded)}>
                <h2 className='Block-text'>Aug 2023 - Dec 2023</h2>
                <h2 className='Block-subtitle'>Software Engineer</h2>
                <h2 className='Block-text'>Freely</h2>
              </div>
              <div className={`Details-block ${isExpanded ? 'expanded' : ''}`}>
                <h1 className='Detail-block-title'>Details</h1>
                <ul>
                  <li>Developed Freely mobile application (job search application for iOS and Android using Dart and Flutter)</li>
                  <li>Team SCRUM master</li>
                  <li>Using Firebase NoSQL Database as the backend to fetch and store data.</li>
                  <li>Displaying strong leadership skills by encouraging the team members to reach a common goal, actively listening to feedback, organizing and leading meetings and ensuring that tasks were properly completed before the deadline.</li>
                </ul>
              </div>
            </div>
          </SlideIn>
          <br />
          <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded2(!isExpanded2)}>
                    <h2 className='Block-text'>May 2021 - Dec 2021</h2>
                    <h2 className='Block-subtitle'>Engineering Co-op Intern</h2>
                    <h2 className='Block-text'>TELUS</h2>
                </div>
                <div className={`Details-block ${isExpanded2 ? 'expanded' : ''}`}>
                <h1 className='Detail-block-title'>Details</h1>
                <ul>
                  <li>Full stack Web developer for the RAN Capacity team. Worked in an Agile environment</li>
                  <li>Used Splunk and SQL to collect data on mobility site congestion and used Excel tools to analyze data to help optimize the congestion prediction algorithm.</li>
                  <li>Experience working with relational databases and creating database tables.</li>
                  <li>Used React and Redux to pinpoint planned mobility sites on a map. SQL was used to display each site’s information such as completion date and band type when selected.</li>
                  <li>Used Jira extensively to show the team the status of each task assigned to me.</li>
                  <li>Used Google Cloud Platform to deploy new web app versions.</li>
                </ul>
              </div>
            </div>
          </SlideIn>
        </div>
    );
}

export function HackathonComponent() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    return (
    <div className='Info-block' style={{ textAlign: 'left', marginLeft: '20px' }}>
        <RevealText>
            <h1 className='Block-title'>Hackathons</h1>
        </RevealText>
        <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded(!isExpanded)}>
                    <h2 className='Block-text'>Jan 2020</h2>
                    <h2 className='Block-subtitle'>Hackatown</h2>
                    <h2 className='Block-text'>École Polytechnique Montréal</h2>
                </div>
                <div className={`Details-block ${isExpanded ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>School Hackathon where teams had to develop a solution to help the environment. Programmed in C++.</li>
                    </ul>
                </div>
            </div>
        </SlideIn>
        <br />
        <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded2(!isExpanded2)}>
                    <h2 className='Block-text'>Sep 2019</h2>
                    <h2 className='Block-subtitle'>LH Games</h2>
                    <h2 className='Block-text'>École Polytechnique Montréal</h2>
                </div>
                <div className={`Details-block ${isExpanded2 ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>School Hackathon where teams develop an AI player for a game like “Paper.io”. Programmed in Java.</li>
                    </ul>
                </div>
            </div>
        </SlideIn>
    </div>
  );
}

export function SchoolProjectsComponent() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [isExpanded5, setIsExpanded5] = useState(false);
    const [isExpanded6, setIsExpanded6] = useState(false);

    return (
        <div className='Info-block' style={{ textAlign: 'left', marginLeft: '20px' }}>
          <RevealText>
            <h1 className='Block-title'>School Projects</h1>
          </RevealText>
          <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded(!isExpanded)}>
                    <h2 className='Block-text'>Sep 2023 - Dec 2023</h2>
                    <h2 className='Block-subtitle'>Cloud Computing class</h2>
                </div>
                <div className={`Details-block ${isExpanded ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>Experience deploying Dockerized applications to AWS instances, creating load balancers, etc. using Terraform.</li>
                    <li>Experience applying software design patterns in a cloud environment, such as Proxy, Gatekeeper, etc.</li>
                    <li>Highest grade in the class with an average of 96.8%.</li>
                    </ul>
                </div>
            </div>
          </SlideIn>
          <br />
          <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded2(!isExpanded2)}>
                    <h2 className='Block-text'>April 2023</h2>
                    <h2 className='Block-subtitle'>Diamond price predictor</h2>
                </div>
                <div className={`Details-block ${isExpanded2 ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>Implemented a machine learning algorithm that accurately predicts the price of  diamonds based on their attributes.</li>
                    <li>Used a previous dataset to feed the machine learning model.</li>
                    <li>Programmed in Julia.</li>
                    </ul>
                </div>
            </div>
          </SlideIn>
          <br />
          <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded3(!isExpanded3)}>
                    <h2 className='Block-text'>Jan 2023 – April 2023</h2>
                    <h2 className='Block-subtitle'>Data visualization project</h2>
                </div>
                <div className={`Details-block ${isExpanded3 ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>In depth data analysis of the Argentinian national team’s performance during the 2022 World Cup, mandated by the Montreal based company Sports AI.</li>
                    <li>Used Python to develop the app, Pandas framework to collect and sort data and Plotly to create graphs and charts.</li>
                    <li>Worked in a team of 6 engineers. Displayed leadership skills by organizing and leading meetings and ensuring that the project is being completed properly and on time. Used GitLab to push changes.</li>
                    <a href="https://inf8808-project.onrender.com/" target="_blank" rel="noreferrer" className='project-link'><li>Click here to view project</li></a>
                    </ul>
                </div>
            </div>
          </SlideIn>
          <br />
          <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded4(!isExpanded4)}>
                    <h2 className='Block-text'>Jan 2022 – May 2022</h2>
                    <h2 className='Block-subtitle'>Web/mobile app with social features</h2>
                </div>
                <div className={`Details-block ${isExpanded4 ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>A continuation of the web design project from the previous year, with added online collaboration features and cross-platform capabilities between Android and Windows.</li>
                    <li>User modifications were done in real time by pushing each brushstroke to a Firebase real time database which were then visible to each user of the application.</li>
                    <li>Used my leadership skills to organize and manage the project throughout the semester.</li>
                    <li>Used Jira to assign tasks and to indicate their completion.</li>
                    <li>Used Kotlin to develop the Android version. This helped me learn how to implement features involving an Android device’s hardware as well as experience developing a mobile application.</li>
                    <li>Every change was pushed to GitLab.</li>
                    </ul>
                </div>
            </div>
          </SlideIn>
          <br />
          <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded5(!isExpanded5)}>
                    <h2 className='Block-text'>Jan 2021 – May 2021</h2>
                    <h2 className='Block-subtitle'>Web Development Project</h2>
                </div>
                <div className={`Details-block ${isExpanded5 ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>Creating a web app like MS Paint where users can create digital art.</li>
                    <li>Showed strong leadership skills by encouraging the team members to reach a common goal, actively listening to feedback, organizing and leading meetings and ensuring that tasks were properly completed before the deadline.</li>
                    <li>Gained a lot of experience working in a team of 6 engineers on a 4 month-long project.</li>
                    <li>The application was developed in TypeScript using the Angular framework.</li>
                    <li>Every change was tested in a development GitLab branch before being deployed to the main branch.</li>
                    <li>Developed a test suite for the application, including unit tests and integration tests.</li>
                    </ul>
                </div>
            </div>
          </SlideIn>
          <br />
          <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded6(!isExpanded6)}>
                    <h2 className='Block-text'>Jan 2020 – May 2020</h2>
                    <h2 className='Block-subtitle'>Embedded System Project</h2>
                </div>
                <div className={`Details-block ${isExpanded6 ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>Programming a robot to do specific tasks such as detecting and avoiding obstacles (C and C++).</li>
                    <li>Experience working in a team on a big project.</li>
                    <li>Used VMWare running Linux to test the functionality of the robot while the robot was not available for use.</li>
                    <li>Experience integrating software changes to the physical robot (Arduino).</li>
                    </ul>
                </div>
            </div>
          </SlideIn>
        </div>
    );
}

export function PersonalProjectsComponent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  return (
    <div className='Info-block' style={{ textAlign: 'left', marginLeft: '20px' }}>
        <RevealText>
            <h1 className='Block-title'>Personal Projects</h1>
        </RevealText>
        <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded(!isExpanded)}>
                    <h2 className='Block-text'>March 2024</h2>
                    <h2 className='Block-subtitle'>This Web App 😊</h2>
                </div>
                <div className={`Details-block ${isExpanded ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>Developed an online resume web application using React and Node.Js.</li>
                    <li>Pushed new versions to GitHub.</li>
                    </ul>
                </div>
            </div>
        </SlideIn>
        <br />
        <SlideIn>
            <div className='resume-block'>
                <div  className='Clickable-block' onClick={() => setIsExpanded2(!isExpanded2)}>
                    <h2 className='Block-text'>Dec 2023 - Present</h2>
                    <h2 className='Block-subtitle'>Social scheduler application</h2>
                </div>
                <div className={`Details-block ${isExpanded2 ? 'expanded' : ''}`}>
                    <h1 className='Detail-block-title'>Details</h1>
                    <ul>
                    <li>Developing the application for Web, iOS and Android that allows users to sign up and schedule meetups with friends.</li>
                    <li>Developed using the Flutter framework (Dart), Express and Node.js for the server and Firebase NoSQL database.</li>
                    <li>Developed in an Agile lifecycle, using Jira SCRUM board to keep track of tasks and GitHub for version control.</li>
                    </ul>
                </div>
            </div>
        </SlideIn>
    </div>
  );
}