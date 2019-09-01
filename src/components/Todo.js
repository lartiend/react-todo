import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {

  isComplete = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <React.Fragment>
        <li className="Todo" style={this.isComplete()}>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} />
          {title}
          <button onClick={this.props.delete.bind(this, id)} >DEL</button>
        </li>
      </React.Fragment>
    );
  }
}


Todo.propTypes = {
  todo: PropTypes.object.isRequired
}

export default Todo;
