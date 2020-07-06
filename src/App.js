import React from 'react';
import GlobalStyles from './components/globals/GlobalStyles'
import OverlayWhite from './components/globals/OverlayWhite'
import OverlayPink from './components/globals/OverlayPink'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

function App() {
  return (

    <React.Fragment>
      <OverlayPink/>
      <OverlayWhite/>
      <GlobalStyles />
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact> <Home/> </Route>
          <Route path="/about" > <About/></Route>
          <Route path="*"> <Error/> </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
