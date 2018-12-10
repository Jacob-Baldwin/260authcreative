import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { Route, Redirect } from 'react-router'

import styles from './NewPost.css';

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        body: "Write your posts in markdown.\n\nFor example: [This](http://www.zombo.com/) is a link.\n\n# This is a heading.\n\nYou can learn more about markdown [here](https://commonmark.org/help/).\n\nEdit the post on the left and see a preview of the post on the right.\n\nThen when you're done, press submit to publish the post for the world to see.",
        title: "Title",
        dateposted: (new Date()).toISOString(),
        datemodified: (new Date()).toISOString(),
        redirect: null
      },
      editing: false
    };
  }

  componentDidMount() {
    let self = this;
  }

  submitPost() {
    let self = this;

    axios.post('/api/posts/new', this.state.post)
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

  editTitle(e) {
    let p = this.state.post;

    p = {
      ...p,
      title: e.target.value
    }

    this.setState({post: p})
  }

  editBody(e) {
    let p = this.state.post;

    p = {
      ...p,
      body: e.target.value
    }

    this.setState({post: p})
  }

  render() {
    var display = <div className="DisplayText">
      <h1>{this.state.post.title}</h1>
      <ReactMarkdown source={this.state.post.body}/>
    </div>

    var edit = <div>
      <div>
        <input
          type="text"
          value={this.state.post.title}
          onChange={this.editTitle.bind(this)}
          />
      </div>

      <div>

        <textarea className="EditPostText"
          onChange={this.editBody.bind(this)}
          value={this.state.post.body}
          />

      </div>

    </div>

    return (
      <div>
        <div className="Editor">
          {edit}
          <button onClick={this.submitPost.bind(this)}>Submit</button>
        </div>
        <div className="Preview">
          {display}
        </div>
        {this.state.redirect}
      </div>
    )
  }

}

export default NewPost;
