import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,

} from "react-router-dom";
import Component_dir from "./ComponentDir/Component_dir";
import Record from "./components/Record/record";



export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <NavBar />
                        <Component_dir />
                        {/*<Record />*/}
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </>

    );
  }
}

