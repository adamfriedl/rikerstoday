import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Container } from 'rebass';
import HeroImage from '../components/HeroImage';
import Introduction from '../components/Introduction';
import Header from '../components/Header';
import Breakdown from '../components/Breakdown';
import Footer from '../components/Footer';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: []
    };
  }

  componentDidMount() {
    fetch(
      `https://data.cityofnewyork.us/resource/gqrb-77i6.json?$limit=11000&$$app_token=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then(res => res.json())
      .then(array =>
        this.setState({
          loading: false,
          data: array
        })
      );
  }

  render() {
    const { loading, data } = this.state;

    return (
      <div>
        <Header />
        <HeroImage loading={loading} data={data} />
        <Container>
          <Introduction />
          <Breakdown data={data} />
        </Container>

        <Footer />
      </div>
    );
  }
}
