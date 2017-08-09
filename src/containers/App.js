import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import HeroImage from '../components/HeroImage'
import Header from '../components/Header'
import Breakdown from '../components/Breakdown'
import Footer from '../components/Footer'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      data: []
    }  
  }

  componentDidMount() { 
    const data = fetch('https://data.cityofnewyork.us/resource/gqrb-77i6.json?$limit=12000')
      .then(res => res.json())
      .then(array => 
        this.setState({
          loading: false,
          data: array
        })
      )
  }
  
  render() {

    const { loading, data } = this.state

    return (
      <div>
        <Header />
        <HeroImage loading={loading} data={data} />
        <Breakdown data={data} />

        <Footer />
        </div>
    )
  }
}