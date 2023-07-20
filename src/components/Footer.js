import React from "react";

function Footer(){
    return(
        <footer>
            <h2>Connect with me!</h2>
          <div className="socials">
            <div className="social-card">
              <i className="fa-brands fa-linkedin-in fa-xl" onClick={()=>{window.location.href='https://www.linkedin.com/in/jack-kendrick-1b7b52254/';}}></i>
            </div>
            <div className="social-card">
              <i className="fa-brands fa-github fa-xl" onClick={()=>{window.location.href='https://github.com/jackckendrick';}}></i>
            </div>
            <div className="social-card">
              <i className="fa-brands fa-instagram fa-xl"  onClick={()=>{window.location.href='https://www.instagram.com/jackkendrickk/';}}></i>
            </div>
            <div className="social-card">
              <a href="mailto:jackckendrickk@gmail.com?subject=Email Subject&body = Hi Jack, ">
              <i className="fa-regular fa-envelope fa-xl"></i>
            </a>
            </div>
        </div>
        </footer>
    )
}

export default Footer