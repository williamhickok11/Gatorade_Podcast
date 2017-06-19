import React from 'react';

const Banner = () => {
  // console.log("props",props);

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
        <div className="banner-image"/>
        <img style={{display:'inline-block', float:'left', 'boxShadow': '0 0 8px 8px white inset'}} src="./imgs/score-board.png" alt="Smiley face" width="500" />
        <div className="gatorade-logo">
          <img src="./imgs/Logo_Gatorade.svg" alt="Smiley face"  />
        </div>
      </div>
    </div>
  );
};


export default Banner;


// <h1>The <br />
//     Secret<br />
//     <sup><u>To</u></sup> Victory</h1>
// <h6>From <strong>Gatorade</strong></h6>
