import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.page';
import ContactForm from './pages/contact-form/contact-form.page';
import SpecificProject from './pages/specific-project/specific-project.page';


import {Route,Switch} from 'react-router-dom'

import React from 'react';

function App() {


  return (

    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path={`/work/:categoryID`} component={SpecificProject} />
        <Route exact path="/contact" component={ContactForm} />
      </Switch>

    </div>
  );
}

export default App;
