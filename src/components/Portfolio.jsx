import React from 'react'
import thedailydose from '../images/thedailydose.png'

const Portfolio = () => {
  return (
    <section id="portfolio-container">
      <h2 id="portfolio-title">Portfolio</h2>

      <div id="project-container">
        <p id="dailydose-text">As a developer, I understand the importance of staying up-to-date with technical concepts, advancements, and new technologies. That's why I decided to build a CMS-style blog site that serves as a platform for developers to share their ideas and insights with one another.

        With this blog site, developers can easily publish their blog posts and engage in discussions by commenting on each other's posts. It's similar to a Wordpress site, but with a focus on technical content and a community of like-minded individuals.

        By creating this blog site, I've not only contributed to the developer community but also gained valuable experience in building a CMS-style website. This project showcases my skills in web development and demonstrates my ability to create a platform that serves a specific niche.

        Overall, my CMS-style blog site is a valuable resource for developers looking to share their knowledge and connect with others in the field.
        </p>
        <a id="dailydose" href=""><img className="dailydose"  src={ thedailydose } alt="Tech Blog Project" /></a>
      </div>

    </section>
  )
}

export default Portfolio