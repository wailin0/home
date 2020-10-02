import React from "react";
import "../style/skills.css"

const Skills = () => {
    return (
        <>
            <div className="section" id="skills">
                <div className="container">
                    <h2 className="title-of-section text-right">Skills</h2>
                    <div className="section-skills">

                        <div className="row">
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608911/wailin/skills/java_stw5ob.svg"
                                    alt="" className="lang-image" width="150" height="150"/>
                            </div>
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608910/wailin/skills/js_m1mogr.png"
                                    alt="" className="lang-image" width="150" height="150"/>
                            </div>
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608912/wailin/skills/html_fqwv6z.svg"
                                    alt="" className="lang-image" width="150" height="150"/>
                            </div>
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608910/wailin/skills/css_xtdak9.svg"
                                    alt="" className="lang-image" width="150" height="150"/>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="row">
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608910/wailin/skills/spring_tncc31.png"
                                    alt="" className="lang-image" width="160" height="150"/>
                            </div>
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608910/wailin/skills/react_ck8bzd.png"
                                    alt="" className="lang-image" width="120" height="150"/>
                            </div>
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608911/wailin/skills/git_hsmq8u.png"
                                    alt="" className="lang-image" width="150" height="150"/>
                            </div>
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608910/wailin/skills/postman_e4gthq.png"
                                    alt="" className="lang-image" width="150" height="150"/>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608910/wailin/skills/nodejs_vznrvf.svg"
                                    alt="" className="lang-image" width="160" height="150"/>
                            </div>
                            <div className="col-sm-3">
                                <img
                                    src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601608911/wailin/skills/docker_duiklv.svg"
                                    alt="" className="lang-image" width="160" height="150"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills