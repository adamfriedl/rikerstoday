import React, { Component } from 'react'
import logo from './logo.svg'
import { Banner, Heading } from 'rebass'
import rikersIsland from './assets/images/rikersIsland.jpg'
import fetch from 'isomorphic-fetch'

class App extends Component {
  constructor() {
    super()
    this.state = {
      totalCount: 0
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
        <Banner
          color='white'
          bg='gray8'
          backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
          <Heading
            f={[ 4, 5, 6, 7 ]}>
            Rikers Numbers Today<br />
            {this.state.totalCount}
          </Heading>

        </Banner>


        
      </div>
    )
  }
}

export default App
