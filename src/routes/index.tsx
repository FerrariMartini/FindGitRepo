import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Dashboard from '../pages/Dashboard';
import Repos from '../pages/Repo';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/repositories/:repository+" component={Repos} />
    </Switch>
  );
};

export default Routes;
