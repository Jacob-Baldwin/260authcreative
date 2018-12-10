import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router'

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      redirect: null
    };

    this.post = this.post.bind(this);
    this.editField = this.editField.bind(this);
  }

  componentDidMount() {
    let self = this;
  }

  post() {
    let self = this;

    axios.post('/signup', this.state)
    .then(function (response) {
      console.log(response);
      self.setState({
        redirect: <Redirect to="/" push={true}/>
      });
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
  }

  editField(e, field) {
    var new_state = this.state;

    console.log(new_state);

    new_state[field] = e.target.value;

    this.setState(new_state);
  }

  render() {
    return (
      <div>
        <div></div>
        Username:<input type="text" id="username" onChange={(e) => {this.editField(e, "username")}}/> <br/>
        Email:<input type="text" id="email" onChange={(e) => {this.editField(e, "email")}}/> <br/>
        Password:<input type="password" id="password" onChange={(e) => {this.editField(e, "password")}}/> <br/>
        <button onClick={this.post}>Submit</button>
        {this.state.redirect}
      </div>
    )
  }

}

export default Signup;
