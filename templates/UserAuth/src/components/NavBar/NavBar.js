import React, { Component } from "react";
import NavBarCss from "./NavBar.module.css";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";



export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }


    render() {


        return (
            <>
                <Header />
                <Nav />


            </>

        );
    }
}

