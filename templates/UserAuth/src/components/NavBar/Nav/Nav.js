import React, { Component } from "react";
import Navcss from "./NAv.module.css";
import home from "./../../../assets/images/home.svg"
import recent from "./../../../assets/images/recent.svg"
import report from "./../../../assets/images/report.svg"
import profile from "./../../../assets/images/profile.svg"


export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }


    render() {


        return (
            <>
                <nav>
                    <ul>
                        <li><span><a href="/"><img src={home} alt="home" /></a></span></li>
                        <li><a href="/record/list/"><img src={recent} alt="recent" /></a></li>
                        <li><a href="/record/new/"><img src={report} alt="report" /></a></li>
                        <li><a href="/auth/profile/"><img src={profile} alt="profile"/></a></li>
                    </ul>
                </nav>


            </>

        );
    }
}

