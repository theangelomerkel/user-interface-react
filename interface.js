import React from 'react';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`Your name is ${this.state.name}, your email is ${this.state.email} and your message is: ${this.state.message}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default App;
