import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SongPicker from './SongPicker';
import Banner from './Banner';
import Details from './Details';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[],bannerImageData:[]};
    // console.log("props",props);
    // this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(this.props.ogPropData)
    .then((result)=> {
      // const thisData = result.data;
      // console.log("result.data",result.data);
      this.setState({
        data: result.data.songList
      });
      console.log("SONGS after axios",this.state);
    });
  }

  handleClick() {
    // Change the state here
    // console.log("this is going to update the song");
  }
  render() {
    console.log("data about to be sent as a prop to SongPicker",this.state.data);
    return (
      <div>
        <Banner
          url = {this.state.data.ogPropData}
        />
        <SongPicker
          onClickProp = {this.handleClick}
          songDataArray = {this.state.data}
        />
        <Details />
      </div>
    );
  }
}

App.propTypes = {
  // store: PropTypes.object.isRequired,
  // history: PropTypes.object.isRequired
};
