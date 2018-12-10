import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

import styles from './Posts.css';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: {}
    };

    this.sortPosts = this.sortPosts.bind(this);
  }

  componentDidMount() {
    let self = this;

    axios.get('/api/posts')
      .then(function (response) {

        let posts = response.data;

        self.setState({
          posts: posts
        });

        console.log(posts);

      })
      .catch(function (error) {
        console.log(error);
        throw error;
      });
  }

  sortPosts() {
    let post_array = [];
    Object.keys(this.state.posts).map((key, index) => {
      post_array.push(this.state.posts[key])
    })

    post_array.sort(function(a,b){
      return new Date(b.dateposted) - new Date(a.dateposted);
    });

    return post_array;
  }

  render() {
    var render_post = (p) => {

      let date = new Date(p.datemodified)

      return(
        <div className="Post">
          <h1>{p.title}</h1>
          <ReactMarkdown source={p.body}/>
          <p className="Footnote">Last Modified: {date.toDateString()}</p>
        </div>
      );
    }

    let posts = this.sortPosts().map((p) => {
      return (render_post(p))
    });

    return (
      <div className="Posts">
        {posts}
      </div>
    )
  }

}

export default Posts
