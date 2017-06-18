import React from 'react';
import PropTypes from 'prop-types';

const Banner = (props) => {
  // console.log("props",props);

  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    border: '1px solid black',
    height: '48px'
  };

  return (
    <div style={styles}>

      {/*<img src={props.data.cover} alt="Smiley face"  />*/}
    </div>
  );
};


export default Banner;

Banner.propTypes = {
  cover: PropTypes.object.isRequired,
};
