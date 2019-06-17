import React from 'react';
import {Switch, Route  } from 'react-router-dom';


import Layout from './components/Layout';
import Home from './components/Home';
import MalyshkiWidget from "./components/malyshki";


function App() {
  return (
    <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/girls' component={MalyshkiWidget} />
        </Switch>
    </Layout>


  );
}

export default App;
