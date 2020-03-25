import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const SneakerPage = () => {
  return (
    <div>
      <h1>Sneaker Page</h1>
      <Link to='/'>Go to homepage.</Link>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/sneakers' component={SneakerPage} />
        {/* <Route exact path='/' component={SneakerPage} /> */}
      </Switch>
    </div>
    
  );
}

export default App;
