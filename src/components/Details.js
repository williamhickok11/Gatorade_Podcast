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
            <div onClick={()=>this.props.goToPreviousPod(this.props.index)}>^ PREVIOUS</div><div onClick={()=>this.props.goToNextPod(this.props.index)}>NEXT ></div>
          </div>
          <div className="bottom-detail-body">
            <p className="episode-number">EPISODE 0{(Number(this.props.currentPodcast.i))}</p>
            <h1>{this.props.currentPodcast.title}</h1>
            <h2>{this.props.currentPodcast.subtitle}</h2>
            <p className="detail-text">{this.props.currentPodcast.summary}</p>
            <div style={{width:'100%', margin:'20px auto'}}>
              <div className="iframe loader"><iframe frameBorder="no" height="150" scrolling="no" src={this.props.currentPodcast.iframeUrl} width="100%" /></div>
            </div>
          </div>
        </div>
      }
      {
      this.props.currentView === "intro" &&
        <div className="intro-main">
          <h1 className="intro-header">EVEN THE BEST ATHLETES IN THE WORLD LOSE. THIS IS A PODCAST ABOUT HOW THEY FACE IT.</h1>
          <p>From Gatorade and Gimlet Creative, <i>The Secret to Victory</i> is about how the most competitive athletes in the world use defeat to fuel their next win. Featuring Serena Williams, Peyton Manning, Eli Manning, Matt Ryan, JJ Watt, Karl Anthony Towns, and Kyle Schwarber, and the people who know them best. Hosted by ESPN writer and former NFL player Domonique Foxworth.</p>
          <br />
          <p>If you’re new to podcasts, there are a bunch of places you can listen to <i>The Secret to Victory</i>. Stream it right here, or try out one of the links below:</p>
          <div className="about-iframe">
            <iframe frameBorder="no" height="200" scrolling="no" src="https://player.megaphone.fm/GLT3091702141?light=true&auto=true" width="100%" />
          </div>
          <div className="intro-image-div">
            <a href="https://itunes.apple.com/us/podcast/id1252154385"><img src="../imgs/Badge_Apple.svg" alt="" /></a>
            <a href="https://www.spotify.com/us/"><img src="../imgs/Spotify.png" alt="" /></a>
            <a href="https://play.google.com/music/listen#/ps/Iocylyx7uf5s6xaizk6ol2t276m"><img src="../imgs/Badge_Google_Play.svg" alt="" /></a>
          </div>
          <div className="rss-feed">
            <h2>Or, add this RSS feed to the player of your choice:</h2>
            <p>http://feeds.gimletcreative.com/thesecrettovictory</p>
          </div>
        </div>
      }
      {
      this.props.currentView === "about" &&
        <div className="about-main">
          <div className="about-text">
            <h1>ABOUT THE SERIES:</h1>
            <p>What happens when the best athletes in the world lose? From Gatorade and Gimlet Creative, a podcast about how the world’s most competitive athletes use defeat as motivation to build strength from the inside out, and ultimately come out on top. Episodes featuring Serena Williams, Peyton Manning, Eli Manning, Matt Ryan, JJ Watt, Karl Anthony Towns,and Kyle Schwarber, and the people who know them best. Listen here, or subscribe wherever you get your podcasts.</p>
          </div>
          <div className="about-text">
            <h1>ABOUT THE HOST:</h1>
            <p>Host Domonique Foxworth, a former cornerback in the National Football League, will bring his unique perspective as a professional athlete to each episode. Foxworth, who played seven seasons in the NFL, is the former president of the National Football League Players Association (NFLPA) and a journalist and commentator for ESPN.</p>
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
  goToPreviousPod: PropTypes.func.isRequired,
  goToNextPod: PropTypes.func.isRequired,
  currentView: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};
