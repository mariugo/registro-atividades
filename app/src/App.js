import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Categoria from "./components/Categoria";
import Home from "./components/Home";
import UpdateCategoria from "./components/UpdateCategoria";

class App extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
        <NavBar/>

      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/categorias' exact={true} component={Categoria}/>
        </Switch>
      </Router>

      </Fragment>
    );
  }
}

export default App;
