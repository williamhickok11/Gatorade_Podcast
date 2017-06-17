import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'inline-block',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  border: '1px solid black',
  width: '50%',
};

const SongCard = ({children}) => {
  return (
    <div style={{border: '1px solid black', margin: '20px'}}>
      {children}
    </div>
  );
};

const SongCardText = ({artist, title, cover, url, clickProp}) => {
  return (
    <div>
      <div>
        <h1>{artist}</h1>
        <h2>{title}</h2>
        <button onClick={()=>clickProp(artist, title, cover, url)} >try me</button>
      </div>
    </div>
  );
};

class SongPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
    console.log("All my song in the SongPicker",props);
  }

  render() {
    // const songData = this.props;
    console.log("songData inside SongPicker render",this.props);
    return (
      <div style={styles}>
        <h1>List of Songs</h1>
        {
          this.props.songDataArray.map((d, i) => {
            return (
              <SongCard key={i}>
                <SongCardText
                  artist={d.artist.name}
                  title={d.artist.song}
                  cover={d.cover}
                  url={d.url}
                  clickProp={this.props.onClickProp}
                />
              </SongCard>
            );
          })
        }
      </div>
    );
  }
}


// Just for validation
SongCardText.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  clickProp: PropTypes.func.isRequired,
};
SongPicker.propTypes = {
  // url: PropTypes.string.isRequired,
};

export default SongPicker;


