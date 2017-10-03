import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Resume from './views/Resume';
import Contact from './views/Contact';
import Projects from './views/Projects';
import Home from './views/Home';
import ProjectPage from '../src/components/projectPage';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <nav>
          <ul className="nav-ul">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
          <h2>Erica's Poppin' Portfolio Page</h2>
        </div>
        
        <Switch>
          <Route path='/projects' component={ Projects } />
          <Route path='/resume' component={ Resume } />
          <Route path='/contact' component={ Contact } />
          <Route path='/projectsPage/:id' component={ ProjectPage } />
          <Route path='/' component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

