import React, { Component } from 'react';
import './App.css';
import Navigation from './components/NavigationContainer'
import Header from './components/HeaderContainer'
import Features from './components/FeaturesContainer'
import TestimonialContainer from './components/TestimonialContainer'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      isMobile: false,
    }
  }
  componentWillMount() {
    var config = {
      headers: {'EnterpriseHost': 'enterprise.staging.getelk.com'}
    };
    let self = this
    axios.all([
        axios.get('https://api.staging.replicated.com/cloud/v1/site/properties', config),
        axios.get('http://demo2271678.mockable.io/testimonials')
      ])
      .then(axios.spread(function (contentResponse, testimonialResponse) {
        self.setState({
          header: contentResponse.data.home.sections[0]['data'],
          features: contentResponse.data.home.sections[2]['data'],
          testimonials: testimonialResponse.data,
          navigation: contentResponse.data.nav,
          loaded: true
        });
      }));
      let mq = window.matchMedia( "(max-width: 480px)" );
      mq.matches ? this.setState({ isMobile: true }) : ''
  }
  render() {
    let { loaded, header, features, testimonials, navigation, isMobile } = this.state
    if(loaded) {
      return (
        <div>
            <Navigation items={navigation.items} logo={navigation.logo} isMobile={isMobile} />
            <Header title={header.title} text={header.text} buttons={header.buttons} />
            <Features items={features.items} title={features.title} />
            <TestimonialContainer title={testimonials.testimonials_header} items={testimonials.testimonials} isMobile={isMobile} />
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <div className="row">
            <div className="column column-50 column-offset-25">
              <h1 className="loading-text">One moment please...</h1>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App;
