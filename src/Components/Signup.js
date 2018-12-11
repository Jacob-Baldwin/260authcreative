import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

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
        redirect: <Redirect to="/login" push={true}/>
      });
    })
    .catch(function (error) {
      console.log(error);
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
        <h3>Signup</h3>
        Username:<input type="text" id="username" onChange={(e) => {this.editField(e, "username")}}/> <br/>
        Email:<input type="text" id="email" onChange={(e) => {this.editField(e, "email")}}/> <br/>
        Password:<input type="password" id="password" onChange={(e) => {this.editField(e, "password")}}/> <br/>
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
        <button onClick={this.post}>Submit</button>
        {this.state.redirect}
      </div>
    )
  }

}

export default Signup;
