import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PodPicker from './PodPicker';
import Details from './Details';

let padcastData = [
  {
    i: "0",
    iframeUrl: "https://player.megaphone.fm/GLT6397330753?",
    image: "https://www.w3schools.com/html/pic_mountain.jpg",
    title: "Am I Any Good",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "1",
    iframeUrl: "https://player.megaphone.fm/GLT4745570283?",
    image: "https://www.w3schools.com/html/pic_mountain.jpg",
    title: "Am I Any Good",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "2",
    iframeUrl: "https://player.megaphone.fm/GLT7925598534?",
    image: "https://www.w3schools.com/html/pic_mountain.jpg",
    title: "Am I Any Good",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "3",
    iframeUrl: "https://player.megaphone.fm/GLT7199909723?",
    image: "https://www.w3schools.com/html/pic_mountain.jpg",
    title: "Am I Any Good",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  },
  {
    i: "4",
    iframeUrl: "https://player.megaphone.fm/GLT1756743900?",
    image: "https://www.w3schools.com/html/pic_mountain.jpg",
    title: "Am I Any Good",
    subtitle: "this will be a subtitle sentence",
    summary: "This is a summary. It will probably take up a few sentences. This will be the last sentence to explain the significance of this section",
    showNotes: "These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. These include the transcript, so fairly large blocks of copy. "
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podData:[],
      index:"",
    };
    // console.log("props",props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(this.props.ogPropData)
    .then((result)=> {
      this.setState({
        podData: result.data.padcastData
      });
      // console.log("data after axios",this.state);
    });
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
    // console.log("data about to be sent as a prop to PodPicker",this.state);
    return (
      <div>
        <PodPicker
          onClickProp = {this.handleClick}
          podDataArray = {this.state.podData}
        />
        <Details
          // This renders before the state is set, I need to fix that
          // currentPodcast = {this.state.podData[i]}
          currentPodcast = {padcastData[this.props.podIndex]}
        />
      </div>
    );
  }
}

App.propTypes = {
  podIndex: PropTypes.number.isRequired,
  ogPropData: PropTypes.string.isRequired
};
