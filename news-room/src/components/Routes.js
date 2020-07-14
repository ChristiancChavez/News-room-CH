import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Categories from './Categories/Categories';

const Routes = () => {
    return (
      <main >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
        </Switch>
      </main>
    );
  };

export default Routes;