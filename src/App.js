import React from 'react';
import './App.css'
import GlobalStyles from './components/globals/GlobalStyles'


import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Error from './pages/Error'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact> <Home/> </Route>
          <Route path="*"> <Error/> </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
