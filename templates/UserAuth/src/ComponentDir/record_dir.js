//


import React from "react";
import {
    Route,

} from "react-router-dom";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import UserDetail from "../components/UserDetailPage/UserDetailPage";
import New from "../components/New/New";
import List from "../components/List/List";
import Detail from "../components/Detail/Detail";

export default function  Record_dir(props)
{


    return (
        <>
            <Route path="/record/new/">
                <New />
            </Route>
            <Route path="/record/list/">
                <List />
            </Route>
            <Route path="/record/detail/:topicId(\d+)/">
                <Detail />
            </Route>
        </>
    );

}
