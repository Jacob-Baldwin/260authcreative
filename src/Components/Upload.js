import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      redirect: null
    };

    this.handleUploadFile = this.handleUploadFile.bind(this);
  }

  handleUploadFile(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('fileupload', this.imageUpload.files[0]);

    axios.post('/upload', data)
    .then((res) => {
      console.log(res);
      alert("Uploaded Successfully");
      this.setState({
        redirect: <Redirect to="/" push={true}/>
      })
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadFile}>
        Upload File
        <div>
          <input ref={(ref) => { this.imageUpload = ref; }} type="file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        {this.state.redirect}
        <p><Link to="/">My Files</Link></p>
      </form>
    );
  }
}

export default Upload;
