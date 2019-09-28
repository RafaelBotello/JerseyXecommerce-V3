import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Components/Products/style.css";
import Index from "./Pages/Index";
import ProductsPage from "./Pages/Products";
import ContactsPage from "./Pages/Contact";
import Footer from "./Components/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Index} />
          <Route exact path="/product" component={ProductsPage} />
          <Route exact path="/contact" component={ContactsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
