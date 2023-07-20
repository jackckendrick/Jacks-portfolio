import React from 'react';

function Project({image, github, name}){
    return(
        <div className="project-card">
              <div className="project-name">{name}</div>
              <div className="project-image">
                <a href={github}><img src={image} alt="Neighborhood Naviator"  className="project-image"></img></a>
              </div>
              <div className="project-description"></div>
            </div>
    )
}

export default Project;