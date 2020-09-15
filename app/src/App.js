import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Categoria from "./components/Categoria";
import Atividade from "./components/Atividade";
import Hero from "./components/Hero"

class App extends React.Component {
  state = {};
  render() {
    return (
      <Fragment>
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Atividade}/>
          <Route path='/categorias' exact={true} component={Categoria}/>
        </Switch>
      </Router>
      <NavBar/>
      <Hero/>
      </Fragment>
    );
  }
}

export default App;
