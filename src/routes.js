import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { isLogged } from './helpers/auth';
import Header from './components/Header';
import Login from './screens/Login';
import Home from './screens/Home';
import CreateDragon from './screens/CreateDragon';
import DragonDetails from './screens/DragonDetails';

function Routes() {
  const isUserLogged = isLogged();
  return (
    <>
      <BrowserRouter>
        <Header isLogged={isUserLogged} />
        {isUserLogged ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create_dragon" component={CreateDragon} />
            <Route exact path="/:id" component={DragonDetails} />
            <Route path="*" component={() => <p>not found</p>} />
          </Switch>
        ) : (
          <Route path="*" component={Login} />
        )}
      </BrowserRouter>
    </>
  );
}

export default Routes;
