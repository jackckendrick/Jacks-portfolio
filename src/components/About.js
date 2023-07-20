import React from "react";
import avatar from "../images/avatar.PNG"
function About () {
    return(
      <section id="About">
        <div classType="container">
          <h1>About Me</h1>
          <h2>Hi, I'm Jack Kendrick</h2>
          <img src={avatar} alt="Picture of Jack's avatar working" id="avatar" classType="gold-glow"></img>
          <p>I am an ambitious rising UT Austin graduate searching for a full-stack software engineering position. During my time in school, I gained valuable experience working on various programming projects and growing my web development, database management, and software engineering skills. I am eager to apply my knowledge and skills to a real-world setting. As a self-motivated and detail-oriented individual, I am committed to delivering high-quality work and continuously growing in my field.</p>
        </div>
        
        </section>
    )
}

export default About