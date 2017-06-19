import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import PodPicker from './PodPicker';
import Details from './Details';
import Footer from './Footer';

let podcastData = [
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
    summary: "This will be the last sentence to explain the significance of this section This is a summary. It will probably take up a few sentences. ",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "2",
    iframeUrl: "https://player.megaphone.fm/GLT7925598534?",
    title: "Here is a Title",
    subtitle: "this will be a subtitle sentence",
    summary: "It will probably take up a few sentences. This is a summary. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "3",
    iframeUrl: "https://player.megaphone.fm/GLT7199909723?",
    title: "Different Title",
    subtitle: "this will be a subtitle sentence",
    summary: "Note to self that I need to write more words in a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "4",
    iframeUrl: "https://player.megaphone.fm/GLT1756743900?",
    title: "Very Last Title",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. Note to self that I need to write more words in a summary. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData: podcastData,
      index:"0",
      currentPodcast: podcastData[0],
      currenView: "intro"
    };
    // console.log("props",props);
    this.selectPodButton = this.selectPodButton.bind(this);
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
    // this should render the new iframe, but it is not
    this.setState({
      currenView: "player",
      index: parseInt(i),
      currentPodcast: this.state.podData[parseInt(i)]
    });
    console.log("this is new state to update the index", this.state);
  }

  render() {
    console.log("data about to be sent as a prop to PodPicker and Details",this.state);
    return (
      <div className="main-container">
        <Banner />
        <hr style={{height:'8px', border:'none', color:'#AFA193', backgroundColor:'#AFA193', margin:'0 auto', width:'90%'}} />
        <div style={{display:'inline-block'}}>
          <PodPicker
            onClickProp = {this.selectPodButton}
            podDataArray = {this.state.podData}
          />
          <Details
            // This renders before the state is set, I need to fix that
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
  ogPropData: PropTypes.string.isRequired
};
