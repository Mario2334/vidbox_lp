import React from "react";
import "./style.scss"
import PhotoGrid from "../PhotoGrid";
import ContactForm from "../ContactForm";
import Logo from "../Logo";

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

    let AppRedirect = () =>{
        window.location.href = "https://app.gigvid.in"
    }

    let bgImage = "/images/bg.jpg";

    return(
        <div className="ecommerceCm">
        {/*    Add Logo  */}
        <Logo/>
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <div className="cmContent" style={{background: `url(${bgImage}) center/cover no-repeat`, paddingBottom: "20%"}}>
                            <h2>Beta is here</h2>
                            {/*<Signup/>*/}
                            <div className="newsLetter">
                                <div className="newsLeterContent">
                                    <h4 className="newsLetterTitle">Try Our PPV Platform. That isn't complex!</h4>
                                    {/*<p>For everyone</p>*/}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="contactUs2" style={{width:"120%"}} onClick={modalShow}>Contact Us</div>
                                </div>

                                <div className="col">
                                    <div className="AppLink" style={{marginLeft: "10%"}} onClick={AppRedirect}>Try App</div>
                                </div>
                            </div>
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