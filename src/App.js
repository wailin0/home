import React from 'react';
import './style/app.css';
import Navibar from "./component/NaviBar";
import AboutMe from "./component/AboutMe";
import Skills from "./component/Skills";
import ContactMe from "./component/ContactMe";
import Home from "./component/Home";
import Portfolio from "./component/Portfolio";
import Footer from "./component/Footer";

function App() {
  return (
    <>
        <Navibar />
        <Home />
        <AboutMe />
        <Portfolio />
        <Skills />
        <ContactMe />
        <Footer />
    </>
  );
}

export default App;
