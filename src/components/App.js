import React, { Component } from 'react';
import axios from 'axios';
import Promise from 'promise-polyfill';
import PropTypes from 'prop-types';
import Banner from './Banner';
import PodPicker from './PodPicker';
import Details from './Details';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData: [],
      index:"",
      currentPodcast: {},
      currenView: ""
    };
    this.goToSelectedPod = this.goToSelectedPod.bind(this);
    this.goToNextPod = this.goToNextPod.bind(this);
    this.goToPreviousPod = this.goToPreviousPod.bind(this);
    this.goToIntroView = this.goToIntroView.bind(this);
    this.goToAboutView = this.goToAboutView.bind(this);
  }

  componentDidMount() {
    if (!window.Promise) {
      window.Promise = Promise;
    }

    axios.get(this.props.apiCall)
    .then((result)=> {
      this.setState({
        podData: result.data.padcastData,
        index:"",
        currentPodcast: result.data.padcastData[0],
        currenView: "intro"
      });
    });
  }

  // define all functions (click events)
  goToNextPod(i) {
    if (i <= 5) {
      this.setState({
        index: parseInt(i)+1,
        currentPodcast: this.state.podData[parseInt(i)+1]
      });
    }
  }
  goToPreviousPod(i) {
    if (i > 0) {
      this.setState({
        index: parseInt(i)-1,
        currentPodcast: this.state.podData[parseInt(i)-1]
      });
    }
  }
  goToSelectedPod(i) {
    this.setState({
      currenView: "player",
      index: parseInt(i),
      currentPodcast: this.state.podData[parseInt(i)]
    });
  }
  goToIntroView() {
    this.setState({
      currenView: "intro",
      index: ""
    });
  }
  goToAboutView() {
    this.setState({
      currenView: "about",
      index: ""
    });
  }

  render() {
    return (
      <div className="main-container">
        <Banner />
        <div className="border-box-shadow" />
        <div className="gost-logos">
          <a href="http://creative.gimletmedia.com/"><div className="gimlet-logo-gost" /></a>
          <a href="http://www.gatorade.com/"><div className="g-logo-gost" /></a>
        </div>
        <hr className="banner-hr" style={{height:'8px', border:'none', color:'#AFA193', backgroundColor:'#AFA193', margin:'0 auto', width:'90%'}} />
        <hr className="banner-hr-mobile" />
        <div className="main-body">
          <PodPicker
            index = {this.state.index}
            currentView = {this.state.currenView}
            onClickProp = {this.goToSelectedPod}
            goToIntroView = {this.goToIntroView}
            goToAboutView = {this.goToAboutView}
            podDataArray = {this.state.podData}
          />
          <Details
            currentView = {this.state.currenView}
            currentPodcast = {this.state.currentPodcast}
            goToNextPod = {this.goToNextPod}
            goToPreviousPod = {this.goToPreviousPod}
            index= {this.state.index}
          />
        </div>
        <Footer />
        <img src="http://pepsico.demdex.net/event?d_sid=8045028" width="0" height="0" />
      </div>
    );
  }
}

App.propTypes = {
  apiCall: PropTypes.string.isRequired
};
