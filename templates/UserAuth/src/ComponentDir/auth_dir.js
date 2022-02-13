import React from "react";
import {
    Route,

} from "react-router-dom";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import UserDetail from "../components/UserDetailPage/UserDetailPage";

export default function  Auth_dir(props)
{


    return (
        <>
            <Route path="/auth/login/">
                <Login />
            </Route>
            <Route path="/auth/signup/">
                <SignUp />
            </Route>
            <Route path="/auth/profile/">
                <UserDetail />
            </Route>
        </>
    );

}



