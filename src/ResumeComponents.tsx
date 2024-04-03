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
          details={["Developed Freely mobile application (job search application for iOS and Android using Dart and Flutter)", 
          "Team SCRUM master", 
          "Using Firebase NoSQL Database as the backend to fetch and store data.",
          "Displaying strong leadership skills by encouraging the team members to reach a common goal, actively listening to feedback, organizing and leading meetings and ensuring that tasks were properly completed before the deadline."]}
          detailsTitle="Details"
        />
        <br />
        <ResumeComponent
          date="May 2021 - Dec 2021"
          title="Engineering Co-op Intern"
          subtitle={null}
          location="TELUS"
          details={["Full stack Web developer for the RAN Capacity team. Worked in an Agile environment", 
          "Used Splunk and SQL to collect data on mobility site congestion and used Excel tools to analyze data to help optimize the congestion prediction algorithm.", 
          "Experience working with relational databases and creating database tables.",
          "Used React and Redux to pinpoint planned mobility sites on a map. SQL was used to display each site’s information such as completion date and band type when selected.",
          "Used Jira extensively to show the team the status of each task assigned to me.",
          "Used Google Cloud Platform to deploy new web app versions."]}
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
            details={["Experience deploying Dockerized applications to AWS instances, creating load balancers, etc. using Terraform.", 
            "Experience applying software design patterns in a cloud environment, such as Proxy, Gatekeeper, etc.", 
            "Highest grade in the class with an average of 96.8%."]}
            detailsTitle="Details"
          />
          <br />
          <ResumeComponent
            date="April 2023"
            title="Diamond price predictor"
            subtitle={null}
            location={null}
            details={["Implemented a machine learning algorithm that accurately predicts the price of  diamonds based on their attributes.", 
            "Used a previous dataset to feed the machine learning model.", 
            "Programmed in Julia."]}
            detailsTitle="Details"
          />
          <br />
          <ResumeComponent
            date="Jan 2023 – April 2023"
            title="Data visualization project"
            subtitle={null}
            location={null}
            details={["In depth data analysis of the Argentinian national team’s performance during the 2022 World Cup, mandated by the Montreal based company Sports AI.", 
            "Used Python to develop the app, Pandas framework to collect and sort data and Plotly to create graphs and charts.", 
            "Worked in a team of 6 engineers. Displayed leadership skills by organizing and leading meetings and ensuring that the project is being completed properly and on time. Used GitLab to push changes.",
            <a href="https://inf8808-project.onrender.com/" target="_blank" rel="noreferrer" className='project-link'><li>Click here to view project</li></a>
          ]}
            detailsTitle="Details"
          />
          <br />
          <ResumeComponent
            date="Jan 2022 – May 2022"
            title="Web/mobile app with social features"
            subtitle={null}
            location={null}
            details={["A continuation of the web design project from the previous year, with added online collaboration features and cross-platform capabilities between Android and Windows.", 
            "User modifications were done in real time by pushing each brushstroke to a Firebase real time database which were then visible to each user of the application.", 
            "Used my leadership skills to organize and manage the project throughout the semester.",
            "Used Jira to assign tasks and to indicate their completion.",
            "Used Kotlin to develop the Android version. This helped me learn how to implement features involving an Android device’s hardware as well as experience developing a mobile application.",
            "Every change was pushed to GitLab."]}
            detailsTitle="Details"
          />
          <br />
          <ResumeComponent
            date="Jan 2021 – May 2021"
            title="Web Development Project"
            subtitle={null}
            location={null}
            details={["Creating a web app like MS Paint where users can create digital art.", 
            "Showed strong leadership skills by encouraging the team members to reach a common goal, actively listening to feedback, organizing and leading meetings and ensuring that tasks were properly completed before the deadline.", 
            "Gained a lot of experience working in a team of 6 engineers on a 4 month-long project.",
            "The application was developed in TypeScript using the Angular framework.",
            "Every change was tested in a development GitLab branch before being deployed to the main branch.",
            "Developed a test suite for the application, including unit tests and integration tests."]}
            detailsTitle="Details"
          />
          <br />
          <ResumeComponent
            date="Jan 2020 – May 2020"
            title="Embedded System Project"
            subtitle={null}
            location={null}
            details={["Programming a robot to do specific tasks such as detecting and avoiding obstacles (C and C++).", 
            "Experience working in a team on a big project.", 
            "Used VMWare running Linux to test the functionality of the robot while the robot was not available for use.",
            "Experience integrating software changes to the physical robot (Arduino)."]}
            detailsTitle="Details"
          />
        </div>
    );
}
