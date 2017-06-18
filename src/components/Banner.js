import React from 'react';

const Banner = () => {
  // console.log("props",props);

  const styles = {
    fontFamily: 'sans-serif',
    height: '200px',
    display: 'block'
  };

  const innerBannerWrapper = {
    padding: '20px'
  };

  return (
    <div className="banner-main" style={styles}>
      <div style={innerBannerWrapper}>
        <div className="page-title" style={{display:'inline-block', float:'left'}}>
          <h1>The <br />
              Secret<br />
              <sup><u>To</u></sup> Victory</h1>
          <h6>From <strong>Gatorade</strong></h6>
        </div>
        <img style={{display:'inline-block', float:'right'}} src="http://www.conceptcarz.com/images/Mercury/69_Mercury-Marauder-X-100-Image-01-1600.jpg" alt="Smiley face" height="100" width="400" />
      </div>
    </div>
  );
};


export default Banner;
