import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import HeroImage from './HeroImage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      totalCount: ''
    }  
  }

  componentDidMount() { 
    const count = fetch('https://data.cityofnewyork.us/resource/gqrb-77i6.json?$limit=12000')
      .then(res => res.json())
      .then(obj => 
        this.setState({
          totalCount: obj.length
        })
      )
  }
  
  render() {
    return (
      <div>
        <HeroImage totalCount={this.state.totalCount} />
      </div>
    )
  }
}

export default App
