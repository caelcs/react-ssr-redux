import React from 'react';

class TodosView extends React.Component {

  componentDidMount() {
    console.log('begin fetch');
    this.props.fetchTodos();
    console.log('end fetch');
  }

  render() {
    const {todos} = this.props;
    console.log(todos);
    //console.log(todos);
    return <div>{ JSON.stringify(todos, null, 2) }</div>;
  }
}

export default TodosView;
