import React from 'react'
import thedailydose from '../images/thedailydose.png';
import socialDose from '../images/socialdose.png';
import workDay from '../images/workday.png';
import weatherDash from '../images/weatherdash.png';
import noteTaker from '../images/notetaker.png';
import passGen from '../images/passgen.png';
import project from '../images/project3.png';

const Portfolio = () => {
  return (
    <section id="portfolio-container">
      <h2 id="portfolio-title">Portfolio</h2>

      <div className="project-container">
        <p className="project-text">The MERN-stack single-page application project aims to solve a real-world challenge by creating a user-focused platform using real-world data. The project will utilize a scalable MongoDB back end, a GraphQL API, and an Express.js and Node.js server for data management, with a React front end for a polished and responsive UI. The application will include authentication with JWT for security, protect sensitive API key information on the server, and follow quality coding standards with a clean repository and a high-quality README. The specific project is a robotic generated art gallery. The project will demonstrate problem-solving skills, solidify understanding of working with multiple servers in a MERN application, and showcase the group's abilities to store project code in GitHub, manage work with a project management tool, and implement feature and bug fixes using the Git branch workflow and pull requests.
        </p>
        <figure>
        <figcaption>Robotic RenAIssance</figcaption>
        <img className="project-photo" src={ project } alt="Tech Blog Project"/>
        </figure>
      </div>

      <div className="btn-div">
      <a href="https://robotic-renaissance.herokuapp.com/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/Robotic_RenAIssance" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>
  
      <div className="project-container">
        <p className="project-text">As a developer, I understand the importance of staying up-to-date with technical concepts, advancements, and new technologies. That's why I decided to build a CMS-style blog site that serves as a platform for developers to share their ideas and insights with one another.

        With this blog site, developers can easily publish their blog posts and engage in discussions by commenting on each other's posts. It's similar to a Wordpress site, but with a focus on technical content and a community of like-minded individuals.

        By creating this blog site, I've not only contributed to the developer community but also gained valuable experience in building a CMS-style website. This project showcases my skills in web development and demonstrates my ability to create a platform that serves a specific niche.

        Overall, my CMS-style blog site is a valuable resource for developers looking to share their knowledge and connect with others in the field.
        </p>
        <figure>
        <figcaption>The Daily Dose</figcaption>
        <img className="project-photo" src={ thedailydose } alt="Tech Blog Project"/>
        </figure>
      </div>

      <div className="btn-div">
      <a href="https://thedailydose.herokuapp.com/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/TheDailyDose" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        I recently built an API for a social network web application that allows users to share their thoughts, react to friends' thoughts, and create a friend list. To create this API, I utilized Express.js for routing and a MongoDB database with the Mongoose ODM.

        Building this API allowed me to gain valuable experience in structuring and organizing data for a social network application. By utilizing MongoDB, I was able to handle large amounts of data efficiently while also accommodating unstructured data. The use of Mongoose ODM provided an additional layer of organization and simplified the database interactions.

        To format timestamps, I opted to use the native JavaScript Date object. This allowed me to easily track when posts were created and updated, giving users a better understanding of when they were last active.

        Overall, the API I built for this social network web application provides a foundation for a full-stack application that can be used to connect users and facilitate sharing of thoughts and ideas. It showcases my proficiency in using technologies commonly used in social networking platforms, such as Express.js and MongoDB.
        </p>
        <figure>
          <figcaption>Social Dose</figcaption>
        <img className="project-photo" src={ socialDose } alt="Social Network API" />
        </figure>
      </div>

      <div className="btn-div">
      <a href="https://drive.google.com/file/d/1_F4EDyZYJi2q_Bfcg8IwpA-nV3ETN_YH/view" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/SocialDose-API" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        I recently built a simple calendar application that allows users to save events for each hour of the day. This browser-based app features dynamically updated HTML and CSS powered by jQuery.

        To create this application, I utilized my skills in HTML, CSS, JavaScript, and jQuery. The app allows users to view the current date and time and add events for each hour of the day. The events are saved to local storage, so users can return to the page and view their saved events.

        The dynamically updated HTML and CSS provide a sleek and modern interface for the user, making it easy to view and manage events. This app is versatile and can be used for a variety of purposes, such as managing a busy work schedule or keeping track of personal appointments.

        Overall, the calendar application I built showcases my skills in front-end development and provides a valuable tool for managing daily tasks and events.
        </p>
        <figure>
          <figcaption>Workday Schedular</figcaption>
        <img className="project-photo" src={ workDay} alt="Work Day Schedular" />
        </figure>
      </div>

      <div className="btn-div">
      <a href="https://fabien1313.github.io/dayscheduler/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/dayscheduler" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        This project involves building a weather dashboard that retrieves weather data from a third-party API and displays it in a user-friendly format. The dashboard runs in a web browser and features dynamically updated HTML and CSS, providing users with up-to-date weather information for various cities. The importance of this project lies in its ability to help users plan their activities and stay informed about weather conditions in different locations. By leveraging the data provided by the 5 Day Weather Forecast API, developers can create a dashboard that is both reliable and accurate. The dashboard can display key weather metrics such as temperature, humidity, and wind speed, as well as provide visual representations such as charts and graphs to help users easily interpret the data. This project is an excellent demonstration of a developer's ability to work with third-party APIs and create a useful and visually appealing application for end-users.
        </p>
        <figure>
          <figcaption>Weather Dashboard</figcaption>
        <img className="project-photo" src={ weatherDash} alt="Weather Dashboard Application" />
        </figure>
      </div>

      <div className="btn-div">
      <a href="https://fabien1313.github.io/weather-application/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/weather-application" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        This project involves building a note-taking application that uses an Express.js back end to save and retrieve note data from a JSON file. The application allows users to write and save notes, providing a convenient way to organize and track their ideas, thoughts, and reminders. The importance of this project lies in its ability to help users manage their workflow and increase productivity. With the ability to easily create and store notes, users can quickly capture ideas, prioritize tasks, and keep track of important information. The Express.js back end provides a fast and reliable way to store and retrieve note data, ensuring that users can access their notes whenever and wherever they need them. This project is an excellent example of a developer's ability to create a robust and functional application that meets the needs of end-users, leveraging the power of Express.js to provide a seamless and efficient note-taking experience.
        </p>
      <figure>
        <figcaption>Note Taker</figcaption>
        <img className="project-photo" src={ noteTaker} alt="Note Taker Application" />
      </figure>
      </div>

      <div className="btn-div">
      <a href="https://fabien1313-noteapp.herokuapp.com/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/Note_taking_app" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        This project involves building a password generator application that runs in a web browser and generates a random password based on criteria selected by the user. The application features a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. The importance of this project lies in its ability to provide users with a secure and reliable way to generate strong passwords that meet their specific requirements. With the increasing importance of online security, it is crucial for individuals and organizations to use strong and unique passwords for their accounts. This password generator application leverages the power of JavaScript to generate random passwords that can include a mix of uppercase and lowercase letters, numbers, and special characters. The user can select the length of the password and which character types to include, providing a flexible and customizable solution to password generation. This project is an excellent example of a developer's ability to create a functional and user-friendly application that meets the needs of end-users, contributing to the overall goal of improving online security.
        </p>
      <figure>
        <figcaption>Password Generator</figcaption>
        <img className="project-photo" src={ passGen } alt="Work Day Schedular" />
      </figure>
      </div>

      <div className="btn-div">
      <a href="https://fabien1313.github.io/PassGenJS/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/PassGenJS" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

    

    </section>
  )
}

export default Portfolio