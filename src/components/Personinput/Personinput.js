import React from "react";
import axios from "axios";

export default class Personinput extends React.Component {
  state = {
    id: 0,
  };

  handlechange = (e) => this.setState({ id: e.target.value });

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person id:
          <input type="number" name="id" onChange={this.handlechange} />
        </label>
        <button type="submit">Delete</button>
      </form>
    );
  }
}
