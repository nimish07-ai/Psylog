import React, {Component, useState} from "react";
import Formcss  from "./../CommonCss/form.module.css";
import {LoginThunk} from "./../../features/UserAuth/Login";
import {useDispatch,useSelector} from "react-redux";
import {
    selectLogin,
    selectStatus,
    selectError,
} from "../../features/UserAuth/AuthSlicer";
import UpperHoc from "../../CommonFunctions/CustomHoc";


export default function Login(props)
{
    const [state, setState] = useState({
        email:"",
        password:""

    })
    const dispatch = useDispatch();
    const Login_state = useSelector(selectLogin);
    const status = useSelector(selectStatus);
    const Error = useSelector(selectError);
    console.log(Login_state,status,Error,state)
    // console.log(state,Formcss)


        return (
            <>
                <UpperHoc redirect="/auth/profile/" Re={true}>
                <section className={Formcss["form-section"]} style={{"margin-top": "50px"}}>
                    <h1 className={Formcss["form-heading"]}>Sign in with your email</h1>
                    <p className={Formcss["form-caption"]}>
                        Don't have an account? <a href="/auth/signup/">Sign up</a>
                    </p>
                    <form onSubmit={ev=>ev.preventDefault()} >
                        <div className={Formcss["input-div"]}>
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="email" id="email" value={state.email}
                                   onChange={ev=>{
                                    setState({...state,email: ev.target.value})
                                   }}
                            />
                        </div>
                        <div className={Formcss["input-div"]}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="password" value={state.password}
                                   onChange={ev=>{
                                       setState({...state,password: ev.target.value})
                                   }}
                                   id="password"/>
                        </div>
                        <input type="submit" className={Formcss["submit-btn"]} value="Continue"
                               onClick={ev=>{dispatch(LoginThunk(state))}} />
                        <span className="warning-text">Error:Invalid login credentials. Please try again.</span>
                    </form>
                </section>
                </UpperHoc>
            </>
        );

}

