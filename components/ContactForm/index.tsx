import React from "react";
import "./style.scss"

interface CounterProps{
    modalClose: Function,
    open: string
}

const ContactForm:React.FC<CounterProps>  = (props:CounterProps) =>{
    let initial_error = {
        name: null,
        email: null,
        business: null,
        phone_number: null,
        company: null
    }
    let [state, useState] = React.useState({
        name: '',
        email: '',
        business: '',
        phone_number: '',
        company:'',
        errors: initial_error,
    });

    let {open, modalClose} = props;

    function validateEmail(email:string) {
        const re = /[\w'+-]+(\.[\w'+-]+)*@\w+([-.]\w+)*\.\w{2,24}/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(ph: string){
        const regx = /[6-9]{1}[0-9]{9}/ ;
        return regx.test(ph);

    }
    let changeHandler = e => {
        useState({
            ...state,[e.target.name]: e.target.value
        })
    };
    let submitHandler = e => {
        e.preventDefault();

        const errors = validate();

        if (errors){
            return useState({
                ...state,
                errors: errors,
            });
        }

        console.log(state)

        submitAT().then(response =>{
            useState({
                name: '',
                email: '',
                business: '',
                phone_number: '',
                company:'',
                errors: initial_error,
            });

            alert('Successfully Send!');
        }).catch(resp_err =>{
            console.log(resp_err);
        });

    };

    let submitAT = async () =>{
        let url = "https://api.airtable.com/v0/appG7IZpm7FP7JQgh/Table%201"
        let token = "keyGaP3NnCgxmO9Zw"
        const { name, email, business,phone_number,company} = state;

        let requestData = [
            {
                "fields":{
                    "Email":email,
                    "Name": name,
                    "Company": company,
                    "Phone number": phone_number,
                    "Business": business
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

    let validate = () => {
        let errors = initial_error;

        const { name, email, business,phone_number,company} = state;

        if (name === '') {
            errors.name = 'Please give a name';
        }
        if (name !== '') {
            errors.name = null;
        }
        if (email !== '' || validateEmail(email)) {
            errors.email = null;
        }
        if (email === '' || !validateEmail(email)) {
            errors.email = 'Please give a valid email';
        }

        if (business === '') {
            errors.business = 'Please give Business';
        }
        if (business !== '') {
            errors.business = null;
        }

        if (phone_number === '' || !validatePhone(phone_number)) {
            errors.phone_number = 'Please give phone number';
        }

        if (phone_number !== ''  && validatePhone(phone_number)) {
            errors.phone_number = null;
        }

        if (company === '') {
            errors.company = 'Please give company';
        }
        if (company !== '') {
            errors.company = null;
        }

        // return Object.keys(errors).length === 0 ? null : errors;
        let is_error = false;
        for(let key of Object.keys(errors)){
            if (errors[key] !== null){
                is_error = true;
            }
        }
        return is_error ? errors : null;

    };

    let modalBox = () => {
        modalClose();
        useState({
            ...state,errors: initial_error
        });
    }

    return(
        <div className={`contactWrapper ${open}`}>
            <div className="modalClose" onClick={modalBox} >
                <span/>
                <span/>
            </div>
            <div className="cntInner">
                <div className="cntHead">
                    <h4>Contact with us</h4>
                </div>
                <div className="cntForm">
                    <form onSubmit={submitHandler}>
                        <div className="formBox">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={state.name}
                                onChange={changeHandler}
                                placeholder="Enter your name"
                            />
                            <span className="isInValid">{state.errors.name}</span>
                        </div>
                        <div className="formBox">
                            <label htmlFor="name">Email:</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={state.email}
                                onChange={changeHandler}
                                placeholder="Enter your email"
                            />
                            <span className="isInValid">{state.errors.email}</span>
                        </div>
                        <div className="formBox">
                            <label htmlFor="name">Business Type</label>
                            <input
                                type="text"
                                id="bus"
                                name="business"
                                value={state.business}
                                onChange={changeHandler}
                                placeholder="Enter your business"
                            />
                            <span className="isInValid">{state.errors.business}</span>
                        </div>
                        <div className="formBox">
                            <label htmlFor="name">Phone Number</label>
                            <input
                                type="text"
                                id="phone_number"
                                name="phone_number"
                                value={state.phone_number}
                                onChange={changeHandler}
                                placeholder="Enter your phone number"
                            />
                            <span className="isInValid">{state.errors.phone_number}</span>
                        </div>
                        <div className="formBox">
                            <label htmlFor="name">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={state.company}
                                onChange={changeHandler}
                                placeholder="Enter your company"
                            />
                            <span className="isInValid">{state.errors.company}</span>
                        </div>
                        {/*<div className="formBox">*/}
                        {/*    <label htmlFor="name">Message:</label>*/}
                        {/*    <textarea*/}
                        {/*        id="message"*/}
                        {/*        name="message"*/}
                        {/*        placeholder="Enter your Message"*/}
                        {/*        value={state.message}*/}
                        {/*        onChange={changeHandler}*/}
                        {/*        />*/}
                        {/*    <span className="isInValid">{state.errors.message}</span>*/}
                        {/*</div>*/}
                        <div className="formSubmit">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;