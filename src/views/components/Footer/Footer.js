import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="FooterGroup About">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="FooterGroup Contact">
          <h3>Contact us</h3>
          <p><i class="far fa-envelope"></i> support@email</p>
          <p><i class="fas fa-phone"></i> +57 *** ****</p>
          <p><i class="fas fa-map-marker-alt"></i> Cra ** #**-***</p>
        </div>
        <div className="FooterGroup Follow">
          <h3>Follow us</h3>
          <p><a href="#"><i class="fab fa-facebook-f"></i> Facebook.user</a></p>
          <p><a href="#"><i class="fab fa-instagram"></i> Instagram.user</a></p>
          <p><a href="#"><i class="fab fa-github"></i> Github.user</a></p>
        </div>
      </footer>
    );
  }
}

export default Footer;
