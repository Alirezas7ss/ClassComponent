import React, { Component } from 'react'
import Baner from './baner';
import Cards from './Cards';
import Search from './Search';
import Logos from './Logos';
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Baner  />
        <Cards />
        <Search />
        <Logos  />
      </div>
    )
  }
}
