import React from "react";
import Nav from "./Components/Nav/index";
import "./App.css";
import Footer from "./Components/Footer/index";
import BackToTop from "./Components/BackToTop/index";
import HomePage from "./Components/HomePage/index";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Router> */}
        <BackToTop />
        {/* <Switch> */}
          {/* <Route path="/home"> */}
            <Nav />
            <HomePage />
            <Footer />
          {/* </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
