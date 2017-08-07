import React, { Component } from 'react'
import logo from './logo.svg'
import { Banner, Heading } from 'rebass'
import rikersIsland from './assets/images/rikersIsland.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <Banner
          color='white'
          bg='gray8'
          backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
          <Heading
            f={[ 4, 5, 6, 7 ]}>
            Rikers Numbers Today
          </Heading>
        </Banner>


        
      </div>
    )
  }
}

export default App
