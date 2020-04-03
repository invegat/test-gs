import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// import Home from './components/Home';
import DumpGSResult from './components/DumpGSResult';

class App extends Component {
  render() {
    return (
      <Router classname='AppRouter' >
        <div className='App'>
          <Route path='/' component={DumpGSResult}   ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
