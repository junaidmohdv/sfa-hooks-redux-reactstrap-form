import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm';
import Users from './Components/Users';
import './Custom.scss';

function App() {
  return (
    <main>
      <Switch>
          <Route path="/" component={RegisterForm} exact />
          <Route path="/users" component={Users} />
      </Switch>
    </main>
  );
}

export default App;
