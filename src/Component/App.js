import React, { Component } from 'react';
//import { Router, Route, browserHistory} from "react-router";
import './App.css';
import News from './News/News';
//import NewsList from "./Component/News/NewsList";
//import {NewsList} from './News/NewsList';


class App extends Component {
  render() {
    return (

      <div className="App">
         


        <header className="App-header">
          <h1 className="App-title">Tech News feed</h1>
        </header>
        <News />

      </div>
    );
  }
}

export default App;
