import React from 'react';

const Banner = () => {

  const innerBannerWrapper = {
    padding: '20px'
  };

  return (
    <div className="banner-main">
      <div style={innerBannerWrapper}>
        <div className="page-title">
          <div className="banner-title">
            <img src="./imgs/Gatorade-Main-Title.png" alt="Smiley face"  width="225px" />
          </div>
        </div>
        <div className="gatorade-logo">
          <img src="./imgs/Logo_Gatorade.svg" alt="Smiley face"  />
        </div>
      </div>
    </div>
  );
};


export default Banner;
