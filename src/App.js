import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Todos from './client/components/todos';

export default props => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/todos" component={Todos} />
      </Switch>
    </div>
  );
};
