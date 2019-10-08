import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import TodosView from './client/components/todos-container';

export default props => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/todos" component={TodosView} />
      </Switch>
    </div>
  );
};
