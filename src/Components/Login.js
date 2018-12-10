import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: null,
      message: null
    };

    this.post = this.post.bind(this);
    this.editField = this.editField.bind(this);
  }

  componentDidMount() {
    let self = this;
  }

  post() {
    let self = this;

    axios.post('/login', this.state)
    .then(function (response) {
      console.log(response);
      self.setState({
        redirect: <Redirect to="/" push={true}/>
      });
    })
    .catch(function (error) {
      console.log(error.response.data);

      self.setState({
        message: error.response.data
      })

      throw error;
    });
  }

  editField(e, field) {
    var new_state = this.state;

    new_state[field] = e.target.value;

    this.setState(new_state);
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        Username:<input type="text" id="username" onChange={(e) => {this.editField(e, "username")}}/> <br/>
        Password:<input type="password" id="password" onChange={(e) => {this.editField(e, "password")}}/> <br/>
        <button onClick={this.post}>Submit</button> <br />
        {this.state.redirect}
        {this.state.message}
      </div>
    )
  }

}

export default Login;
