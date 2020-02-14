import React from 'react';
import Navbar from './Components/navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/home'
import Projects from './Components/projects'
import Contact from './Components/contact'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/Projects" component = {Projects}/>
        <Route exact path = "/Contact" component = {Contact}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
