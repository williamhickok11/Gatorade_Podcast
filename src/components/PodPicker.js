import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'inline-block',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  border: '1px solid black',
  width: '50%',
};

const PodCard = ({children}) => {
  return (
    <div style={{border: '1px solid black', margin: '20px'}}>
      {children}
    </div>
  );
};

const PodCardText = ({artist, title, cover, url, clickProp, i}) => {
  console.log("i",i)
  return (
    <div>
      <div>
        <h1>{artist}</h1>
        <h2>{title}</h2>
        <button onClick={()=>clickProp(artist, title, cover, url, i)} >try me</button>
      </div>
    </div>
  );
};

class PodPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
    console.log("All my song in the PodPicker",props);
  }

  render() {
    // const songData = this.props;
    console.log("songData inside PodPicker render",this.props);
    // console.log("state",this.state)
    return (
      <div style={styles}>
        <h1>List of Songs</h1>
        {
          this.props.songDataArray.map((d, i) => {
            return (
              <PodCard key={i}>
                <PodCardText
                  i={this.props.i}
                  artist={d.artist.name}
                  title={d.artist.song}
                  cover={d.cover}
                  url={d.url}
                  clickProp={this.props.onClickProp}
                />
              </PodCard>
            );
          })
        }
      </div>
    );
  }
}


// Just for validation
PodCardText.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  clickProp: PropTypes.func.isRequired,
};
PodPicker.propTypes = {
  // url: PropTypes.string.isRequired,
};

export default PodPicker;


