import React from 'react';
import PropTypes from 'prop-types';
import CLAudioPlayer from 'react-cl-audio-player';

// This is the new one (I think)
// import ReactMusicPlayer from 'react-music-player';
// <ReactMusicPlayer songs={songs} autoplay />

// import Audio from 'react-audioplayer';
// This goes on line 37
//<Audio
  //width={600}
  //height={400}
  //autoPlay={true}
  //playlist={playList}
///>


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
    // console.log("props in details constructor",props);
    super(props);
    this.state = {
      data:this.props.songDataArray,
      index:this.props.currentSongIndex
    };
    // console.log("props",props);
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let playList = [];
    playList.push(this.state.data[this.state.index]);
    console.log("this.state.data",this.state);
    return (
      <div style={styles}>
          <h1>Details</h1>
          <iframe frameborder="no" height="200" scrolling="no" src="https://player.megaphone.fm/GLT6397330753?" width="100%" />

      </div>
    );
  }

}

          // <CLAudioPlayer songs={playList}  />

export default Details;

Details.propTypes = {
  songDataArray: PropTypes.array.isRequired,
  currentSongIndex: PropTypes.number.isRequired
};
