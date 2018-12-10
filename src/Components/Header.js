import React from 'react'
import styles from './Header.css';

import { Link } from 'react-router-dom'

const Header = () => (
  <div className="Header">
    <h1>Lost In The Sauce</h1>
    <h3>A Blog About My Experience In CS 260</h3>
    <Link to="/" className="Link">Home</Link>
    <Link to="/new" className="Link">New Post</Link>
    <Link to="/about" className="Link">About</Link>
  </div>
)

export default Header
