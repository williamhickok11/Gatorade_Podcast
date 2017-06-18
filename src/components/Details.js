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
    this.state = {
      currentPodcast:this.props.currentPodcast
    };
    console.log("The state in the Details View",this.props);
  }
  render() {

    return (
      <div className="detail-view" style={styles}>

        <div className="top-controls">
          <div onClick={()=>this.props.previousButton()}>^ PREVIOUS</div><div onClick={()=>this.props.nextButton()}>NEXT ></div>
        </div>

        <div className="bottom-detail-body">
          <p className="episode-number">EPISODE 0{(Number(this.state.currentPodcast.i)+1)}</p>
          <h1 style={{color:'#ECD25B'}}>{this.state.currentPodcast.title}</h1>
          <h2>{this.state.currentPodcast.subtitle}</h2>
          <p className="detail-text">{this.state.currentPodcast.summary}</p>
          <div style={{width:'100%', margin:'0px auto'}}>
            <iframe frameBorder="no" height="150" scrolling="no" src={this.state.currentPodcast.iframeUrl} width="100%" />
          </div>
        </div>

      </div>
    );
  }
}

export default Details;

Details.propTypes = {
  currentPodcast: PropTypes.object.isRequired
};
