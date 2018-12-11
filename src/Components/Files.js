import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class Files extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      redirect: null,
      user: null
    };

    this.getUser = this.getUser.bind(this);
    this.editField = this.editField.bind(this);
  }

  componentDidMount() {
    let self = this;
    this.getUser();
  }

  getUser() {
    let self = this;

    axios.get('/user/profile')
    .then(function (response) {
      console.log(response);
      self.setState({
        user: response.data
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
    if (this.state.user) {
      return (
        <div>
          Logged in
        </div>
      )
    }
    else {
      return (
        <div>
          <h3>File Hosting Demo</h3>
          <p>Have an account?</p>
            <p><Link to="/login">Login</Link> </p>
            <p><Link to="/signup">Signup</Link></p>
          {this.state.redirect}
        </div>
      )
    }
  }

}

export default Files;
