import React from "react";

function Navigation(props){
  const { currentTab, setCurrentTab } = props;
    return(
        <nav>
          <div className="nav-bar">
            <ul id="stacked">
              <li onClick={()=>{setCurrentTab("About")}}><a href="#">About</a></li>
              <li onClick={()=>{setCurrentTab("Portfolio")}}><a href="#">Projects</a></li>
              <li onClick={()=>{setCurrentTab("Resume")}}><a href="#">Resume</a></li>
              <li onClick={()=>{setCurrentTab("Contact")}}><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
    )
}

export default Navigation