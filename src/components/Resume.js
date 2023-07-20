import React from "react";
import myResume from "../images/Jack Kendrick Resume 2023 copy.pdf"
function Resume(){
    return(
        <section id="Resume">
          <div className="container">
          <h2>Resume</h2>
          <div id="pdf-container">
            <embed src={myResume} type="application/pdf" width="100%" height="900px" />
          </div>
          </div>
      </section>
    )
}

export default Resume