import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from 'core/Home'
import About from 'core/About'
import ContactUs from 'core/ContactUs'

import './Main.css'

const Main = () => (
  <main className="App-intro">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={ContactUs} />
    </Switch>
  </main>
)

export default Main
