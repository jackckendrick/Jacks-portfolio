import React from "react";

import Navigation from "./Navigation";

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return(
        <div id="sticky" className = "container">
        <section>
            <header className="flex-row px-1">
                <div className = "title">
                    <h4>Jack's Portfolio</h4>
                </div>
                <div>
                    <Navigation 
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    ></Navigation>
                </div>
            </header>
        </section>
        </div>
    )
}

export default Header