import React, { useState } from "react";
import "./app.css"
import Footer from "../src/components/Footer";
import Portfolio from "../src/components/Portfolio";
import About from "../src/components/About";
import Resume from "../src/components/Resume";
import Header from "../src/components/Header";
import Contact from "../src/components/Contact";
function App() {
  const [currentTab, setCurrentTab] = useState("About");

  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    } else if (currentTab === "Contact") {
      return <Contact />;
    } else if (currentTab === "Portfolio") {
      return <Portfolio />;
    } else if (currentTab === "Resume") {
      return <Resume />;
    } else {
      return <About />;
    }
  };

  return (
    <>
      <Header className="homepage1"currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      <main id="main" >{renderTab()}</main>
      <Footer></Footer>
    </>
  );
}

export default App;