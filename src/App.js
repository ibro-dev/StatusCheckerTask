// Import React and Component
import React, { Component } from 'react';
// Import CSS from App.css
import './App.css';
// Import the PageStatus component to be used below
import Pagestatus from './Pagestatus/Pagestatus'
import Pageslist from './Pageslist/Pageslist'
class App extends Component {
  render() {
    return (
      <div className="">
          <div className="topheader">
              <header className="container">
                  <nav className="navbar">
                      <div className="navbar-brand">
                          <span className="navbar-item">StatusChecker</span>
                      </div>
                  </nav>
              </header>
          </div>
          <section className="results--section">
              <div className="container">
                  <h1>StatusChecker displays live stats informations from websites</h1>
              </div>
              <div className="results--section__inner">
                  <Pageslist />
                  <Pagestatus />
              </div>
          </section>
      </div>
    );
  }
}

export default App;
