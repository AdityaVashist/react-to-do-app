import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import './App.css';
import { StoreProvider } from './store';

class App extends Component {
  render() {
    return (
      <StoreProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </StoreProvider>
    );
  }
}

export default App;
