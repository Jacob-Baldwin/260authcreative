import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from './Posts';
import NewPost from './NewPost';
import About from './About';

import styles from './Main.css'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main className="Main">
    <Switch>
      <Route exact path='/' component={Posts}/>
      <Route path='/new' component={NewPost}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main
