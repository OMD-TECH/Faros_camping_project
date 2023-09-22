import React from "react"
import Home from "./components/Home";
import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import About from "./components/About";
import Donate from "./components/Donate";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
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
          </Switch>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
