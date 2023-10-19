import React from "react"
import Home from "./components/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./components/About";
import Donate from "./components/Donate";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="contents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/donate">
              <Donate />
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
