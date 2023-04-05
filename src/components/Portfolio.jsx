import React from 'react'
import thedailydose from '../images/thedailydose.png'
import socialDose from '../images/socialdose.png'

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
        <a className="project-anchor" href="https://github.com/fabien1313/TheDailyDose" target="_blank"><img className="project-photo"  src={ thedailydose } alt="Tech Blog Project" /></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        I recently built an API for a social network web application that allows users to share their thoughts, react to friends' thoughts, and create a friend list. To create this API, I utilized Express.js for routing and a MongoDB database with the Mongoose ODM.

        Building this API allowed me to gain valuable experience in structuring and organizing data for a social network application. By utilizing MongoDB, I was able to handle large amounts of data efficiently while also accommodating unstructured data. The use of Mongoose ODM provided an additional layer of organization and simplified the database interactions.

        To format timestamps, I opted to use the native JavaScript Date object. This allowed me to easily track when posts were created and updated, giving users a better understanding of when they were last active.

        Overall, the API I built for this social network web application provides a foundation for a full-stack application that can be used to connect users and facilitate sharing of thoughts and ideas. It showcases my proficiency in using technologies commonly used in social networking platforms, such as Express.js and MongoDB.
        </p>
        <a className="project-anchor" href=""><img className="project-photo" src={ socialDose } alt="" /></a>
      </div>

    

    </section>
  )
}

export default Portfolio