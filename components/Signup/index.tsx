import React from "react";
import "./style.scss"

const Signup: React.FC = (props) => {
    return(<div className="newsLetter">
                <div className="newsLeterContent">
                    <h4 className="newsLetterTitle">Pay Per View is Coming to India</h4>
                    <p>For everyone</p>
                </div>
                <form>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        name="email"

                    />
                    <button type="submit"/>
                </form>
           </div>)
}

export default Signup;