import React from 'react';

class TodosView extends React.Component {

  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  render() {
    const { todos } = this.props;
    return <div>{ JSON.stringify(todos, null, 2) }</div>;
  }
}

export default TodosView;
