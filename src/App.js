import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Error from './pages/Error'

function App() {
  return (
      <BrowserRouter basename="/">>
        <Switch>
          <Route path="/" exact> <Home/> </Route>
          <Route path="*"> <Error/> </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
