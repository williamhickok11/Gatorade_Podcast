import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SongPicker from './SongPicker';
import Banner from './Banner';
import Details from './Details';

const handleClick = function() {
    console.log("I have handled the click");
  };

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data:[],bannerImageData:[]};
    console.log("props",props);
    // this.handleClick = this.handleClick.bind(this);
    this.save = this.save.bind(this);
  }

  save() {
    // Change the state here
    console.log("this is going to update the song", );
  }





  // This binding is necessary to make `this` work in the callback

  componentDidMount() {
    axios.get(this.props.imageUrl)
    .then((result)=> {
      // const thisData = result.data;
      this.setState({
        bannerImageData: result.data.testData,
        data: result.data.songList
      });
      // console.log("this.state number to",this.state);
    });
  }

  render() {
    return (
      <div>
        <Banner
          url = {this.state.bannerImageData.imageUrl}
        />
        <SongPicker
          onClickProp = {this.save}
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
