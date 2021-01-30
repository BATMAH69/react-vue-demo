import React, { Component } from 'react';

import StartDemo from './StartDemo';
import StartVuexDemo from './StartDemo/vuex.js';
import VueDemo from './VueDemo';
import VuexDemo from './VuexDemo';

import FlipDemo from './FlipDemo/Demo';
//import FlipDemo from './FlipDemo/App';


export default class App extends Component {
  render () {
    return (
      <div>
        <FlipDemo />
      </div>
    )
  }
}
