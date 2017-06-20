import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="detail-view">
      {
      this.props.currentView === "player" &&
        <div className="player-controls-main">
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
        <div className="intro-main">
          <h1 className="intro-header">EACH EPISODE WILL START WITH THE SOUND FROM A GAME.</h1>
          <p>It’s one moment. It’s there and then it’s gone. In sports, losing takes a split second. Some losses are routine and some are transformative. This is a podcast series about the loss that changed everything for an athlete. Because there’s always a riveting story in the moments before and after that loss.</p>
          <div className="intro-image-div">
            <a href="https://www.google.com"><img src="./imgs/Badge_Apple.svg" alt="" /></a>
            <a href="https://www.google.com"><img src="./imgs/Badge_Spotify.svg" alt="" /></a>
            <a href="https://www.google.com"><img src="./imgs/Badge_Google_Play.svg" alt="" /></a>
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
  previousButton: PropTypes.func.isRequired,
  nextButton: PropTypes.func.isRequired,
  currentView: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
