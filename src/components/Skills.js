import React from "react";

function Skills(){
    return(
        <section id="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills">
            <div className="skill">
              <div className="skill-name">HTML</div>
              <div className="skill-bar" style="width: 90%;">
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">CSS</div>
              <div className="skill-bar" style="width: 70%;">
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">JavaScript</div>
              <div className="skill-bar" style="width: 72%;">
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Python</div>
              <div className="skill-bar" style="width: 30%;">
              </div>
            </div>
            <div className="skill">
                <div className="skill-name">SQL</div>
                <div className="skill-bar" style="width: 70%;">
                </div>
              </div>
            <div className="skill">
              <div className="skill-name">React</div>
              <div className="skill-bar" style="width: 30%;">
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Skills