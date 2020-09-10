import React, { Component } from "react";
import NavBar from "../components/Navigation/NavBar";
//import Footer from "../components/Footer"

class LandingPage extends Component {
  render() {
    document.title = "Tasky chan! | Welcome to Tasky chan";
    return (
      <div>
        <header>
          <NavBar />
        </header>
        <section id="Home"></section>
        <section id="Why"></section>
        <section id="How"></section>
        <section id="Support"></section>
        {/*<Footer />*/}
      </div>
    );
  }
}

export default LandingPage;
