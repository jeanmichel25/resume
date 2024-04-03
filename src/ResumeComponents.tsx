import React, { useState } from 'react';
import './App.css';
import { RevealText, SlideIn } from './MotionComponents.tsx';

function ResumeComponent({ date, title, subtitle, location, details, detailsTitle }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SlideIn>
      <div className='resume-block'>
        <div className='Clickable-block' onClick={() => setIsExpanded(!isExpanded)}>
          <div className='date-block'>
            <h2 className='Block-text'>{date}</h2>
            <div className={`arrow ${isExpanded ? 'rotate' : ''}`}></div>
          </div>
          <h2 className='Block-subtitle'>{title}</h2>
          {subtitle && <h2 className='Block-subtitle'>{subtitle}</h2>}
          {location && <h2 className='Block-text'>{location}</h2>}
        </div>
        <div className={`Details-block ${isExpanded ? 'expanded' : ''}`}>
          <h1 className='Detail-block-title'>{detailsTitle}</h1>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </SlideIn>
  );
}

export function EducationComponent() {
  return (
    <div className='Info-block' style={{ textAlign: 'left', marginLeft: '20px' }}>
      <RevealText>
        <h1 className='Block-title'>Education</h1>
      </RevealText>
      <ResumeComponent
        date="Aug 2019 - Dec 2023"
        title="B.Eng in Software Engineering"
        subtitle="Specialized in Data Science and A.I."
        location="École Polytechnique Montréal"
        details={["Excellence bursary in Software Engineering, Computer Engineering and Electrical Engineering"]}
        detailsTitle="Achievements"
      />
    </div>
  );
}

export function WorkComponent() {
    return (
      <div className='Info-block' style={{ textAlign: 'left', marginLeft: '20px' }}>
        <RevealText>
          <h1 className='Block-title'>Work Experience</h1>
        </RevealText>
        <ResumeComponent
          date="Aug 2023 - Dec 2023"
          title="Software Engineer"
          subtitle={null}
          location="Freely"
          details={["Led the frontend development of the Freely job search mobile application.", 
          "Developed a cross-platform application compatible with iOS and Android devices using Dart and Flutter, applying principles of SDLC and methodologies like Agile.", 
          "Implemented Firebase NoSQL Database for efficient data storage and retrieval, enhancing application performance.",
          "Adopted Google’s Material UI Design Language to deliver a modern, sleek, and responsive user interface, improving user experience.",
          "Integrated a chat functionality developed with sockets for seamless and real-time message sending and reception, enabling users to chat with potential employers.",
          "Incorporated a notification system using Firebase Cloud Messaging into the application, keeping users updated about important messages and job alerts.",
          "Organized and led team meetings as the Scrum Master, ensuring smooth project progression and adherence to requirements and deadlines.",
          "Frequently met with the client to provide updates on the newest features and seek feedback, ensuring the product metclient expectations and needs."
          ]}
          detailsTitle="Details"
        />
        <br />
        <ResumeComponent
          date="Jan 2023 – April 2023"
          title="Data Analyst"
          subtitle={null}
          location="Sports AI"
          details={["Conducted comprehensive data analysis on the performance of teams during World Cup 2022, allowing for a deeper understanding of the correlation between football statistics and ultimately lead to better decision making by coaches.", 
          "Developed data visualization tools using Python and Plotly, improving data literacy.", 
          "Managed a team of six engineers, ensuring project milestones were met on time.",
          <a href="https://inf8808-project.onrender.com/" target="_blank" rel="noreferrer" className='project-link'><li>Click here to view project</li></a>
          ]}
          detailsTitle="Details"
          />
          <br />
        <ResumeComponent
          date="May 2021 - Dec 2021"
          title="Engineering Co-op Intern"
          subtitle={null}
          location="TELUS"
          details={["Full stack Web developer for the RAN Capacity team. Worked in an Agile environment", 
          "Used Splunk and SQL to collect data on mobility site congestion and used Excel tools to analyze data and optimized the prediction algorithm", 
          "Created multiple relational database tables to store newly calculated data relating to predicted network traffic",
          "Designed and implemented React and Redux components to visualize mobility site data, improving mobility site resource management",
          "Used Jira extensively to show the team the status of each task assigned to me.",
          "Deployed new versions of the web application on Google Cloud Platform, ensuring seamless user experiences."]}
          detailsTitle="Details"
        />
      </div>
    );
}

export function HackathonComponent() {
  return (
    <div className='Info-block' style={{ textAlign: 'left', marginLeft: '20px' }}>
      <RevealText>
        <h1 className='Block-title'>Hackathons</h1>
      </RevealText>
      <ResumeComponent
          date="Jan 2020"
          title="Hackatown"
          subtitle={null}
          location="École Polytechnique Montréal"
          details={["School Hackathon where teams had to develop a solution to help the environment. Programmed in C#."]}
          detailsTitle="Details"
        />
      <br />
      <ResumeComponent
          date="Sep 2019"
          title="LH Games"
          subtitle={null}
          location="École Polytechnique Montréal"
          details={["School Hackathon where teams develop an AI player for a game like “Paper.io”. Programmed in Java."]}
          detailsTitle="Details"
        />
    </div>
  );
}

export function ProjectsComponent() {
    return (
        <div className='Info-block' style={{ textAlign: 'left', marginLeft: '20px' }}>
          <RevealText>
            <h1 className='Block-title'>Projects</h1>
          </RevealText>
          <ResumeComponent
            date="March 2024"
            title="This Web App 😊"
            subtitle={null}
            location={null}
            details={["Developed an online resume web application using React and Node.Js.", 
            "Pushed new versions to GitHub."]}
            detailsTitle="Details"
          />
        <br />
        <ResumeComponent
            date="Dec 2023 - Present"
            title="Social scheduler application"
            subtitle={null}
            location={null}
            details={["Developing the application for Web, iOS and Android that allows users to sign up and schedule meetups with friends.", 
            "Developed using the Flutter framework (Dart), Express and Node.js for the server and Firebase NoSQL database.",
            "Developed in an Agile lifecycle, using Jira SCRUM board to keep track of tasks and GitHub for version control."]}
            detailsTitle="Details"
          />
          <br />
          <ResumeComponent
            date="Sep 2023 - Dec 2023"
            title="Project Scaling Databases and Implementing Cloud Design Patterns"
            subtitle={null}
            location={null}
            details={["Created and Dockerized Python Flask applications to AWS instances, creating load balancers, etc. using Terraform.", 
            "Implemented cloud design patterns to ensure secure and efficient data transmission, resulting in a 57.5% improvement in SQL performance."]}
            detailsTitle="Details"
          />
          <br />
          <ResumeComponent
            date="Sep 2023 - Dec 2023"
            title="Abalone game AI"
            subtitle={null}
            location={null}
            details={["Engineered an AI bot capable of playing the board game 'Abalone' using Python and advanced adversarial algorithms, achieving a 70% performance improvement through heuristic optimization.", 
            "Rigorously tested several algorithms such as Minimax and Alpha-Beta, as well as various heuristics to ensure the best algorithm was selected.",]}
            detailsTitle="Details"
          />
          <br />
          <ResumeComponent
            date="April 2023"
            title="Diamond price predictor"
            subtitle={null}
            location={null}
            details={["Developed a machine learning algorithm in Julia to accurately predict diamond prices based on attributes.", 
            "Created Data Visualizations to accurately see the correlation between different variables, helping to choose which algorithm, such as linear regression or Bayesian inference among others, is best suited for the prediction of values",]}
            detailsTitle="Details"
          />
          <br />
          <ResumeComponent
            date="Jan 2021 – May 2022"
            title="Picass.io art canvas app"
            subtitle={null}
            location={null}
            details={["Led the development of a real-time collaborative art application, incorporating socket-based communication and Agile project management methodologies.", 
            "Utilized Kotlin for Android version and Angular with TypeScript for Windows version, demonstrating proficiency in mobile and web development frameworks", 
            "Developed a test suite for the application, including unit tests and integration tests, to ensure robustness and accuracy.",]}
            detailsTitle="Details"
          />
          <br />
        </div>
    );
}
