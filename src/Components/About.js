import React from 'react'
import styles from './About.css';

import { Link } from 'react-router-dom'

const About = () => (
  <div className="About">
    <h3>CS 260 Mongo Creative Blog Platform</h3>
    <p>
      This is a super simple blogging platform written in ReactJS running on a Node and Mongo backend.
      Users can create new posts and view historical posts. Posts are created and stored using a markdown
      syntax and persist in the database.
    </p>

    <p>
      The purpose of this project was to demonstrate the ability to implement the essential elements of
      a blogging platform using technologies we've used during CS 260. There are still a lot of features that
      it would be fun to add such as authentication, the ability to upload images (although you can add exisiting
      images with a url through markdown), and making all posts searchable by date and tag.
    </p>
  </div>
)

export default About
