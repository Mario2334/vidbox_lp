import React from "react";
import "./style.scss"
import PhotoGrid from "../PhotoGrid";
import ContactForm from "../ContactForm";

const Layout:React.FC = (props) =>{

    let [state,useState] = React.useState({
        open:''
    });

    let modalClose = () => {
        useState({
            open: ''
        })
    };

    let modalShow = () => {
        useState({
            open: 'show'
        })
    };

    let bgImage = "/images/bg.jpg";

    return(
        <div className="ecommerceCm">
        {/*    Add Logo  */}
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="cmContent" style={{background: `url(${bgImage}) center/cover no-repeat`}}>
                            <h2>Coming Soon</h2>
                            {/*<Signup/>*/}
                            <div className="newsLetter">
                                <div className="newsLeterContent">
                                    <h4 className="newsLetterTitle">Pay Per View is Coming to India</h4>
                                    <p>For everyone</p>
                                </div>
                            </div>
                            <div className="contactUs2" onClick={modalShow}>Contact Us</div>
                        </div>
                        <ContactForm open={state.open}
                                     modalClose={modalClose}/>
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