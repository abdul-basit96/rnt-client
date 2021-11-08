import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Pages/Home";
import Footer from "./Components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import Services from "./Pages/Services";
import About from "./Pages/About";
import ContactForm from "./Pages/ContactForm";
import FAQ from "./Pages/FAQ";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import Products from "./Pages/Products";
import GoodWe from './Pages/GoodWe'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={ContactForm}></Route>
        <Route exact path="/faq" component={FAQ}></Route>
        <Route exact path="/privacy" component={PrivacyPolicy}></Route>
        <Route exact path="/terms" component={Terms}></Route>
        <Route exact path="/goodwe" component={GoodWe}></Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
