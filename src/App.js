import './App.scss';
import './components/style.scss'
import React from 'react';
import Normalize from 'react-normalize';
import Header from "./components/layout/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Modal from 'react-modal';
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contacts from './components/pages/Contacts';


Modal.setAppElement('#root');

export default function App() {
  return (
      <>
        <Router>
          <Normalize />
          <Header />
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/services' component={Services} />
              <Route path='/contacts' component={Contacts} />
          </Switch>
        </Router>
      </>
  );
}
