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
      user: null,
      files: []
    };

    this.getUser = this.getUser.bind(this);
    this.getFiles = this.getFiles.bind(this);
    this.editField = this.editField.bind(this);
  }

  componentDidMount() {
    let self = this;
    this.getUser();
    this.getFiles();
  }

  getUser() {
    let self = this;

    axios.get('/user/profile')
    .then(function (response) {
      console.log(response.data);
      self.setState({
        user: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
  }

  getFiles() {
    let self = this;

    axios.get('/files')
    .then(function (response) {
      console.log(response.data);
      self.setState({
        files: response.data
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
    let files = this.state.files.map((f) => {
      return (
        <div>
          <a href={"download/" + f.filename}>{f.displayname}</a>
        </div>
      );
    });

    if (this.state.user) {
      return (
        <div>
          <p>Logged in as: {this.state.user.username}</p>
          <p><a href="/logout">Logout</a></p>
          <p><Link to="/upload">Upload New File</Link></p>

          <h2>My Files</h2>
          <div>
            {files}
          </div>

        </div>
      )
    }
    else {
      return (
        <div>
          <h3>File Hosting Demo</h3>
          <p>
            I decided to make a site the replicates the basic functionality of a cloud file hosting website
            such as Dropbox, Google Drive, or Box.
          </p>
          <p>
            Make an account and upload your files, and share them
            with your friends!
          </p>
          <p>
            Files are publically accessible at their url, but your files won't be
            listed for other users.
          </p>
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
