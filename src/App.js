import React from 'react';
import {BrowserRouter, Switch, Route  } from 'react-router-dom';


import Layout from './components/Layout';
import Home from './components/Home';


function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </Layout>


  );
}

export default App;
