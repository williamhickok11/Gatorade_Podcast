import React from 'react';
import PropTypes from 'prop-types';
import CLAudioPlayer from 'react-cl-audio-player';

// This is the new one (I think)
// import ReactMusicPlayer from 'react-music-player';
// <ReactMusicPlayer songs={songs} autoplay />



const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  border: '1px solid black',
  width: '40%',
  // width: '40%',
  float: 'right'
};


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.songDataArray
      // data:[],
      // bannerImageData:[],
      // title:"hello title"
    };
    // console.log("props",props);
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    console.log("this.state.data",this.state.data);
    return (
      <div style={styles}>
          <h1>Details</h1>
          <CLAudioPlayer songs={this.state.data} autoplay />
      </div>
    );
  }

}


export default Details;

Details.propTypes = {
  songDataArray: PropTypes.array.isRequired
};
