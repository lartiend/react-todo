import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <Todo key={todo.id} todo={todo}
        toggleComplete={this.props.toggleComplete}
        delete={this.props.delete}
      />
    ))
      ;
  }
}


Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
