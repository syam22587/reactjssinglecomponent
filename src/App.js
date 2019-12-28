import React from "react";

import NavBar from "./components/common/navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/common/loginForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main role="main" className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Redirect from="/" exact to="/movies" />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
