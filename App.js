import React from 'react';
import "./App.css";
import {Route, Link} from 'react-router-dom';
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Form from "./components/Form";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner />
      <Route exact path="/services" component={Services}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/prices" component={Prices}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/form" component={Form}></Route>
    </div>
  );
}

export default App;
