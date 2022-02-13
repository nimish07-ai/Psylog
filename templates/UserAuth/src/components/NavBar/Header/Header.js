import React, { Component } from "react";
import Headercss from "./Header.module.css";
import logo from "./../../../assets/images/logo.svg"



export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <>
                <header className={Headercss.header}>
                    <div className={Headercss.logo} onClick={ev=>window.location.href="/"}>
                        <img src={logo} alt="logo" />
                        <h1 className={Headercss.name}>Psylog</h1>
                    </div>
                </header>
            </>

        );
    }
}

