import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import PodPicker from './PodPicker';
import Details from './Details';
import Footer from './Footer';

let padcastData = [
  {
    i: "0",
    iframeUrl: "https://player.megaphone.fm/GLT6397330753?",
    title: "Am I Any Good?",
    subtitle: "with JJ Watt, of the Houston Texans",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "1",
    iframeUrl: "https://player.megaphone.fm/GLT4745570283?",
    title: "This Is Title 2",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "2",
    iframeUrl: "https://player.megaphone.fm/GLT7925598534?",
    title: "This Is Title 3",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "3",
    iframeUrl: "https://player.megaphone.fm/GLT7199909723?",
    title: "This Is Title 3",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "4",
    iframeUrl: "https://player.megaphone.fm/GLT1756743900?",
    title: "This Is Title 5",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData: padcastData,
      index:"0",
    };
    // console.log("props",props);
    this.handleClick = this.handleClick.bind(this);
    this.nextButton = this.nextButton.bind(this);
    this.previousButton = this.previousButton.bind(this);
  }

  componentDidMount() {
    // THIS IS TO REPLACE LINE 54
    // axios.get(this.props.ogPropData)
    // .then((result)=> {
    //   this.setState({
    //     podData: result.data.padcastData
    //   });
      // console.log("data after axios",this.state);
    // });
  }

  nextButton(i) {
    if (i=0) {
      //dont do anything
    } else {
      this.state.index = i+1;
    }
    console.log("this is new state to update the index", this.state);
  }

  previousButton(i) {
    if (i=0) {
      //dont do anything
    } else {
      this.state.index = i-1;
    }
    console.log("this is new state to update the index", this.state);
  }

  handleClick(i) {
    // this should render the new iframe, but it is not
    // this.setState({
    //   index:i,
    // });
    this.state.index = i;
    console.log("this is new state to update the index", this.state);
  }

  render() {
    // console.log("data about to be sent as a prop to PodPicker and Details",this.state);
    return (
      <div className="main-container" style={{maxWidth:'900px', margin:'0 auto'}}>
        <Banner />
        <hr style={{height:'8px', border:'none', color:'#AFA193', backgroundColor:'#AFA193', margin:'0 auto', width:'90%'}} />
        <div style={{display:'inline-block'}}>
          <PodPicker
            onClickProp = {this.handleClick}
            podDataArray = {this.state.podData}
          />
          <Details
            // This renders before the state is set, I need to fix that
            currentPodcast = {this.state.podData[this.state.index]}
            nextButton = {this.nextButton}
            previousButton = {this.previousButton}
          />
        </div>
        <hr style={{height:'1px', border:'none', color:'#AFA193', backgroundColor:'#AFA193', width:'100%'}} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  ogPropData: PropTypes.string.isRequired
};
