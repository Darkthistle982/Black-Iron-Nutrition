import React from "react";
import "./index.css";
import Jumbotron from "react-bootstrap/Jumbotron";

function Footer() {
  return (
    <footer className="footer">
      <Jumbotron>
        <p className="pull-right">
          <i className="fab fa-github" /> All items and documents within are the
          sole property of Ink &amp; Iron Nutrition. For use by registered and
          paid clientele of Cory Black, and Ink &amp; Iron Nutrition. Sharing of
          login, or any of the content of this site to unauthorized parties is
          strictly forbidden, and may result in a loss of access to the site.
        </p>
        <hr />
        <div className="text-center">
          Icons made by{" "}
          <a href="https://smashicons.com/" title="Smashicons">
            Smashicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Jumbotron>
    </footer>
  );
}

export default Footer;
