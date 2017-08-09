import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import HeroImage from '../components/HeroImage'
import Header from '../components/Header'
import Breakdown from '../components/Breakdown'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }  
  }

  componentDidMount() { 
    const data = fetch('https://data.cityofnewyork.us/resource/gqrb-77i6.json?$limit=12000')
      .then(res => res.json())
      .then(array => 
        this.setState({
          data: array
        })
      )
  }
  
  render() {

    const { data } = this.state

    return (
      <div>
        <Header />
        <HeroImage data={data} />
        <Breakdown data={data} />
        </div>
    )
  }
}