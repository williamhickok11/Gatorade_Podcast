import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontFamily: 'sans-serif',
  width: '60%',
  margin: '30px 0 0 40px',
  float: 'left'
};

class Details extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentPodcast:this.props.currentPodcast
    // };
    // console.log("The state in the Details View",this.props);
  }
  render() {
    // console.log("this.state",this.state);
    console.log("this.props",this.props);
    return (
      <div className="detail-view" style={styles}>


      {
      this.props.currentView === "player" &&
        <div>
          <div className="top-controls">
            <div onClick={()=>this.props.previousButton(this.props.index)}>^ PREVIOUS</div><div onClick={()=>this.props.nextButton(this.props.index)}>NEXT ></div>
          </div>
          <div className="bottom-detail-body">
            <p className="episode-number">EPISODE 0{(Number(this.props.currentPodcast.i)+1)}</p>
            <h1>{this.props.currentPodcast.title}</h1>
            <h2>{this.props.currentPodcast.subtitle}</h2>
            <p className="detail-text">{this.props.currentPodcast.summary}</p>
            <div style={{width:'100%', margin:'20px auto'}}>
              <iframe frameBorder="no" height="150" scrolling="no" src={this.props.currentPodcast.iframeUrl} width="100%" />
            </div>
          </div>
        </div>
      }
      {
      this.props.currentView === "intro" &&
        <div>
          <h1 style={{color:'#ECD25B', width:'65%', paddingTop:'25px'}}>Each Episode will start with the sound from a game.</h1>
          <p style={{padding:'15px 0'}}>This is a long sentence that I am going to have to duplicat multiple times. This is a long sentence that I am going to have to duplicat multiple times. This is a long sentence that I am going to have to duplicat multiple times. This is a long sentence that I am going to have to duplicat multiple times. This is a long sentence that I am going to have to duplicat multiple times. </p>
          <div className="intro-image-div">
            <img src="./imgs/Badge_Apple.svg" alt="" />
            <img src="./imgs/Badge_Spotify.svg" alt="" />
            <img src="./imgs/Badge_Google_Play.svg" alt="" />
          </div>
        </div>
      }


      </div>




    );
  }
}

export default Details;

Details.propTypes = {
  currentPodcast: PropTypes.object.isRequired,
  nextButton: PropTypes.func.isRequired,
  previousButton: PropTypes.func.isRequired
};
