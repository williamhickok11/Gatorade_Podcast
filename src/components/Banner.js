import React from 'react';



const Banner = (props) => {
  console.log("props",props);

  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    border: '1px solid black'
  };

  return (
    <div style={styles}>
        <h1>Hello Image</h1>
    </div>
  );
};


export default Banner;
