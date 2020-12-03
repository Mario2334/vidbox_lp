import React from "react";
import "./style.scss"
import Signup from "../Signup";
import PhotoGrid from "../PhotoGrid";

const Layout:React.FC = (props) =>{
    let bgImage = "/images/bg.jpg";
    return(
        <div className="ecommerceCm">
        {/*    Add Logo  */}
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="cmContent" style={{background: `url(${bgImage}) center/cover no-repeat`}}>
                            <h2>Coming Soon</h2>
                            <Signup/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <PhotoGrid/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;