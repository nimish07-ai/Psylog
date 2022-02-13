import React from "react";
import {
    Route,

} from "react-router-dom";
import Auth_dir from "./auth_dir";
import Record_dir from "./record_dir";
import Landing from "../components/Landing/Landing";


export default function  Component_dir(props)
{

        return (
            <>
                <Route path={"/"} exact>
                <Landing />
                </Route>
                <Route path="/auth/">
                  <Auth_dir />
                </Route>

                <Route path="/record/">
                    <Record_dir />
                </Route>

            </>
        );

}



