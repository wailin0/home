import React from "react";
import "../style/aboutme.css"

const AboutMe = () => {
    return (
        <>
            <div className="section-about" id="about">
                <div className="container">
                    <h2 className="title-of-section title-border">About Me</h2>
                </div>
                <div className="container about-container">
                    <div className="row contrast">
                        <div className="col-sm-4 col-no-padding">
                            <div className="about-picture" id="about-picture">
                                <img src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601703654/wailin/page/about-image_ac2bb7.jpg" alt="" className="responsive-image" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="padding-box">
                                <h1 className="title2">Who i am</h1>
                                <p>
                                    Hi I'm a software developer who specialized in both frontend, backend. I'm a passionate programmer who's always exploring new technology.
                                    Most of the time I'm busy learning new tools, executing new project idea or helping others with
                                    their
                                    problems. 
                                </p>
                                <a href="https://drive.google.com/file/d/1K9swm8TDlF4BJoM2KJaoRUb4egp47eL-/view?usp=sharing">
                                <button className="btn btn-outline-dark">
                                        My Resume
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
