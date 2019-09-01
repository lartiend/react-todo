import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: '',
    test: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }
  render() {
    return (
      <form action="" style={{
        display: 'flex',
        marginBottom: '10px'
      }}
        onSubmit={this.onSubmit}
      >
        <input type="text" name="title" id="title" placeholder="Add Todo..."
          style={{ flex: '10', padding: '5px' }}
          required
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="text" name="test" id="title" placeholder="test..."
          style={{ flex: '10', padding: '5px' }}
          value={this.state.test}
          onChange={this.onChange}
        />
        <input type="submit" value="submit" className="btn" style={{ flex: '1' }} />
      </form>
    );
  }
}

export default AddTodo;
