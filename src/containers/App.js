import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import HeroImage from '../components/HeroImage'
import Header from '../components/Header'
import Breakdown from '../components/Breakdown'

class App extends Component {
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

    let under16 = this.state.data.filter(inmate => inmate.age < 18).length
    let mho = this.state.data.filter(inmate => inmate.bradh == 'Y').length
    let race = this.state.data.filter(inmate => inmate.race == 'B').length
    console.log('Number black is '+ race)


    return (
      <div>

        <Header />
        <HeroImage totalCount={this.state.data.length} />
        <Breakdown under16={under16} mho={mho}/>
        </div>
    )
  }
}

export default App
