import React from 'react';
import GlobalStyles from './components/globals/GlobalStyles'
import Overlay from './components/globals/Overlay'

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Error from './pages/Error'

function App() {
  return (

    <React.Fragment>
      <Overlay/>
      <GlobalStyles />
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact> <Home/> </Route>
          <Route path="*"> <Error/> </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
