import React from 'react'
import thedailydose from '../images/thedailydose.png'
import socialDose from '../images/socialdose.png'
import workDay from '../images/workday.png'

const Portfolio = () => {
  return (
    <section id="portfolio-container">
      <h2 id="portfolio-title">Portfolio</h2>

      <div className="project-container">
        <p className="project-text">As a developer, I understand the importance of staying up-to-date with technical concepts, advancements, and new technologies. That's why I decided to build a CMS-style blog site that serves as a platform for developers to share their ideas and insights with one another.

        With this blog site, developers can easily publish their blog posts and engage in discussions by commenting on each other's posts. It's similar to a Wordpress site, but with a focus on technical content and a community of like-minded individuals.

        By creating this blog site, I've not only contributed to the developer community but also gained valuable experience in building a CMS-style website. This project showcases my skills in web development and demonstrates my ability to create a platform that serves a specific niche.

        Overall, my CMS-style blog site is a valuable resource for developers looking to share their knowledge and connect with others in the field.
        </p>
        <img className="project-photo"  src={ thedailydose } alt="Tech Blog Project" />
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
        <img className="project-photo" src={ socialDose } alt="Social Network API" />
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

        <img className="project-photo" src={ workDay} alt="Work Day Schedular" />
      </div>

      <div className="btn-div">
      <a href="https://fabien1313.github.io/dayscheduler/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/dayscheduler" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

    

    </section>
  )
}

export default Portfolio