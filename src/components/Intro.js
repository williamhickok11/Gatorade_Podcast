import React from 'react';

const Banner = () => {
  // console.log("props",props);

  const styles = {
    fontFamily: 'sans-serif',
    height: '200px',
    display: 'block'
  };

  return (
    <div className="intro-main" style={styles}>
      <h1>Each Episode will start with the sound from a game.</h1>
      <p>This is aosgjop gjj eng hi.sa hhoknfHtoThis is aosgjop gjj eng hi.sa hhoknfHtoThis is aosgjop gjj eng hi.sa hhoknfHtoThis is aosgjop gjj eng hi.sa hhoknfHtoThis is aosgjop gjj eng hi.sa hhoknfHto</p>
      <div className="intro-image-div">
        <img style="display:'inline-block, height:'25px'" src="" alt="" />
        <img style="display:'inline-block, height:'25px'" src="" alt="" />
        <img style="display:'inline-block, height:'25px'" src="" alt="" />
      </div>
    </div>
  );
};


export default Banner;
