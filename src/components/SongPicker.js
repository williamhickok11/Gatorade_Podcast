import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  border: '1px solid black',
  width: '50%',
};

class SongPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
    console.log("All my song in the SongPicker",props);
  }

  render() {
    const songData = this.props;
    console.log("songData inside SongPicker render",songData);
    return (
      <div style={styles}>
        <h1>List of Songs</h1>
        {
          songData.songDataArray.map((d, i) => {
            return (
              <SongCard key={i}>
                <SongCardText
                  artist={d.artist}
                  title={d.title}
                  year={d.year}
                  clickProp={songData.onClickProp}
                />
              </SongCard>
            );
          })
        }
      </div>
    );
  }
}


const SongCard = ({children}) => {
  return (
    <div style={{border: '1px solid black', margin: '20px'}}>
      {children}
    </div>
  );
};

const SongCardText = ({artist, title, year, clickProp}) => {
  return (
    <div>
      <div>
        <h1>{artist}</h1>
        <h2>{title}</h2>
        <h3>{year}</h3>
        <button onClick={clickProp} >try me</button>
      </div>
    </div>
  );
};

// This goes on line 45



// Just for validation
SongCardText.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  clickProp: PropTypes.func.isRequired,
};
SongPicker.propTypes = {
  // url: PropTypes.string.isRequired,
};

export default SongPicker;


