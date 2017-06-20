import React, { Component } from 'react';
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
    this.selectPodButton = this.selectPodButton.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.previousButton = this.previousButton.bind(this);
    this.introViewButton = this.introViewButton.bind(this);
  }

  componentDidMount() {
    axios.get(this.props.apiCall)
    .then((result)=> {
      this.setState({
        podData: result.data.padcastData,
        index:"0",
        currentPodcast: result.data.padcastData[0],
        currenView: "intro"
      });
    });
  }

  // define all functions (click events)
  nextButton(i) {
    if (i <= 4) {
      this.setState({
        index: parseInt(i)+1,
        currentPodcast: this.state.podData[parseInt(i)+1]
      });
    }
  }
  previousButton(i) {
    if (i > 0) {
      this.setState({
        index: parseInt(i)-1,
        currentPodcast: this.state.podData[parseInt(i)-1]
      });
    }
  }
  selectPodButton(i) {
    this.setState({
      currenView: "player",
      index: parseInt(i),
      currentPodcast: this.state.podData[parseInt(i)]
    });
  }
  introViewButton() {
    this.setState({
      currenView: "intro"
    });
  }

  render() {
    return (
      <div className="main-container">
        <img src="http://pepsico.demdex.net/event?d_sid=8045028" width="0" height="0" />
        <Banner />
        <hr className="banner-hr" style={{height:'8px', border:'none', color:'#AFA193', backgroundColor:'#AFA193', margin:'0 auto', width:'90%'}} />
        <hr className="banner-hr-mobile" style={{height:'5px', border:'none', color:'white', backgroundColor:'white', margin:'0 auto', width:'100%', position:'relative', top: '-55px'}} />
        <div className="main-body">
          <PodPicker
            onClickProp = {this.selectPodButton}
            introViewButton = {this.introViewButton}
            podDataArray = {this.state.podData}
          />
          <Details
            currentView = {this.state.currenView}
            currentPodcast = {this.state.currentPodcast}
            nextButton = {this.nextButton}
            previousButton = {this.previousButton}
            index= {this.state.index}
          />
        </div>
        <hr style={{height:'1px', border:'none', color:'#AFA193', backgroundColor:'#AFA193', width:'100%'}} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  apiCall: PropTypes.string.isRequired
};
