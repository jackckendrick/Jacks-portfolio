import React from 'react';
import Project from './Project';
import Raincheck from '../images/Raincheck_gif.gif';
import Neighborhood from '../images/Neighborhood-navigator_gif.gif';
import Workday from '../images/workday-scheduler_gif.gif';
import Bark from '../images/barkbook_gif.gif';
import bringMe from '../images/bringMe_gif.gif';
import shopster from '../images/category_gif.gif';
const projectData = [
    {
        id: 1,
        name: 'Raincheck',
        image:  Raincheck,
        github: "https://github.com/jackckendrick/Raincheck",
    },
    {
        id: 2,
        name: 'Neighborhood Navigator',
        image:  Neighborhood,
        github: "https://jackckendrick.github.io/Neighborhood--Navigator/",
    },
    {
        id: 3,
        name: 'Workday Scheduler',
        image:  Workday,
        github: "https://github.com/jackckendrick/Work-Day-Scheduler",
    },
    {
        id: 4,
        name: 'Bark Book',
        image:  Bark,
        github: "https://github.com/jackckendrick/BarkBook",
    },
    {
        id: 5,
        name: 'Bring Me',
        image:  bringMe,
        github: "https://github.com/MogleyBear06/Bring-Me",
    },
    {
        id: 6,
        name: 'Shopster',
        image:  shopster,
        github: "https://github.com/jackckendrick/shopster",
    }
];

function Portfolio() {
    return (
      // declaring Fragment <> to cover all elements - React return one html element if more than element return cover with fragment element
      <section id="Projects">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="portfolio" id="portfolio">
          {/* using map repeat every seed in data array */}
          {projectData.map((item, i) => {
            return (
              // called project pass values
              <Project
                key={item.id}
                name={item.name}
                image={item.image}
                github={item.github}
              />
            );
          })}
        </div>
      </div>
      </section>
    );
  }
  



export default Portfolio