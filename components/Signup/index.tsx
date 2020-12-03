import React from "react";
import "./style.scss"

const Signup: React.FC = (props) => {
    let [state,useState] = React.useState({
        email: '',
        errorMessage: ''
    });

    function validateEmail(email) {
        const re = /[\w'+-]+(\.[\w'+-]+)*@\w+([-.]\w+)*\.\w{2,24}/;
        return re.test(String(email).toLowerCase());
    }

    let submitAT = async (email:string) =>{
        let url = "https://api.airtable.com/v0/appG7IZpm7FP7JQgh/Table%201"
        let token = "keyGaP3NnCgxmO9Zw"

        let requestData = [
            {
                "fields":{
                    "Email":email
                }
            }
        ]
        const response = await fetch(
            url,
            {
                method: "post",
                body: JSON.stringify({records : requestData}),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
        )
        return response.json();
    }

    let submitHandler = e => {
        e.preventDefault();

        const email =e.target.email.value;

        if (validateEmail(email)){
            submitAT(email).then(response =>{
                useState({
                    email: '',
                    errorMessage: 'Successfully Subscribed!'
                })
            }).catch((error) =>{
                console.log(error);
                useState({
                    email: '',
                    errorMessage: 'Error in sending mail'
                });
            })
        } else {
            useState({
                email: '',
                errorMessage: 'Please give a valid email!'
            })
        }

    }
    return(<div className="newsLetter">
                <div className="newsLeterContent">
                    <h4 className="newsLetterTitle">Pay Per View is Coming to India</h4>
                    <p>For everyone</p>
                </div>
                <form onSubmit={event => submitHandler(event)}>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                    />
                    <button type="submit"/>
                </form>
        <p className={`submitInfo ${state.errorMessage !== '' ? 'show' : ''}`}>{state.errorMessage}</p>
           </div>)
}

export default Signup;