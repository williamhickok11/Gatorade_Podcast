import React from 'react';

const Banner = () => {
  return (
    <div className="banner-main">
      <div className="innerBannerWrapper">
        <div className="page-title">
          <div className="banner-title">
            <img className="main-title" src="./imgs/Gatorade-Main-Title.png" alt="Smiley face" />
            <img className="main-title-mobile" src="./imgs/Title-Mobile.png" alt="Smiley face" />
          </div>
        </div>
        <div className="gatorade-logo">
          <a href="http://www.gatorade.com/"><img src="./imgs/Logo_Gatorade.svg" alt="Smiley face"  /></a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
