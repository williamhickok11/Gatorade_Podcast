import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontFamily: 'sans-serif',
  width: '47%',
  marginLeft: '40px',
  padding: '30px',
  float: 'left'
};

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPodcast:this.props.currentPodcast
    };
    // this.handleClick = this.handleClick.bind(this);
    console.log("this.state",this.state);
  }
  render() {

    return (
      <div className="detail-view" style={styles}>
        <div className="banner">
          <img  src={this.state.currentPodcast.image} alt="" />
          <p>EPISODE 0{(Number(this.state.currentPodcast.i)+1)}</p>
        </div>
          <h1 style={{color:'#ECD25B'}}>{this.state.currentPodcast.title}</h1>
          <h2>{this.state.currentPodcast.subtitle}</h2>
          <p>{this.state.currentPodcast.summary}</p>
          {/*<h4>{this.state.currentPodcast.showNotes}</h4>*/}
          <div style={{width:'90%', margin:'0 auto'}}>
            <iframe frameBorder="no" height="200" scrolling="no" src={this.state.currentPodcast.iframeUrl} width="100%" />
          </div>

      </div>
    );
  }
}

export default Details;

Details.propTypes = {
  currentPodcast: PropTypes.object.isRequired
};
