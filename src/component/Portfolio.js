import React, {useEffect, useState} from "react";
import "../style/portfolio.css"

const Portfolio = () => {
    const [data,setData] = useState([])


    useEffect(() => {
        fetch("https://wailin-3f518.firebaseio.com/portfolio.json")
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setData(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])









    return (
        <>
            <div className="section section-portfolio contrast" id="portfolio">
                <div className="container">
                    <h2 className="title-of-section title-border">Portfolio</h2>
                    <div className="portfolio-list row" id="filter-container">

                        { data.map((d) => (
                            <div className="col-sm-4">
                                <div className="portfolio-item filter-item cat-cultural cat-featured">
                                    <a href={d.url}
                                       className="portfolio-thumbnail fancybox" rel="portfolio"
                                       title="Description here"
                                       style={{backgroundImage: `url(${d.pic})` }}>
                                        <div className="portfolio-description-wrapper">
                                            <div className="portfolio-description">
                                                <h2 className="portfolio-title">{d.name}</h2>
                                                <span className="see-more">{d.info}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )) }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio