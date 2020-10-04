import React from "react";
import "../style/home.css"

const Home = () => {
    return (
        <>
            <div className="section-mini-hero" id="home"
                 style={{backgroundImage: "url('https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601609311/wailin/page/bg2_gsn6bh.jpg')"}}>
                <div className="container">
                    <div className="profile-pic">
                        <img src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601820096/wailin/wlh_v8hy6m_ssha1d.jpg"
                             alt=""/>
                    </div>
                    <h1 className="title1 mini-hero-title"><strong>Wai Lin Htet</strong></h1>
                    <h2 className="title2 mini-hero-subtitle">Full Stack Web App Developer</h2>
                </div>
            </div>
        </>
    )
}

export default Home