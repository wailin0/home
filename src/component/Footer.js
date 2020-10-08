import React from "react";
import '../style/footer.css'

const Footer = () => (
    <footer id="footer">
        <div className="secondary-footer">
            <div className="container">
                <div className="row ">
                    <div className="col-sm-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="40"
                             alt=""/>
                    </div>
                    <div className="col-sm-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png" height="50"
                             alt=""/>
                    </div>
                    <div className="col-sm-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/1280px-Netlify_logo.svg.png"
                            height="30" alt=""/>
                    </div>
                    <div className="col-sm-2">
                        <img
                            src="https://cloudinary-res.cloudinary.com/image/upload/c_scale,f_auto,q_auto,w_550/dpr_2.0/v1597847487/website/cloudinary_logo_blue_0720.png"
                            height="30" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer