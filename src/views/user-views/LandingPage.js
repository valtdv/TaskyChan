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
        <section className="Home" id="Home">
        </section>
        <section className="Why" id="Why"></section>
        <section className="How" id="How"></section>
        <section className="Support" id="Support"></section>
        {/*<Footer />*/}
      </div>
    );
  }
}

export default LandingPage;
