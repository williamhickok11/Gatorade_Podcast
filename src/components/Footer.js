import React from 'react';

const Footer = () => {
  // console.log("props",props);

  const styles = {
    display: 'block',
    margin: '15px',
    paddingBottom: '15px'
  };

  return (
    <div className="footer-main" style={styles}>
      <div className="footer-third hash-tag-mobile">
        <p>#makedefeatyourfuel</p><p>#winfromwithin</p>
      </div>
      <hr style={{height:'1px', border:'none', margin:'5px 0 20px 0', color:'#AFA193', backgroundColor:'#AFA193', width:'100%'}} />
      <div className="footer-third gim-im">
        <img style={{width:'75px'}} src="./imgs/GC_flag.png" alt="" />
      </div>
      <div className="footer-third hash-tag">
        <p>#makedefeatyourfuel &nbsp;&nbsp; #winfromwithin</p>
      </div>
      <div style={{textAlign:'right'}} className="footer-third footer-icons">
        <a href="https://www.instagram.com/gatorade/"><img style={{width:'30px', margin:'0 0 0 20px'}} src="./imgs/Icon_instagram.png" alt="" /></a>
        <a href="https://www.facebook.com/Gatorade/"><img style={{width:'30px', margin:'0 0 0 20px'}} src="./imgs/Icon_Fb.svg" alt="" /></a>
        <a href="https://twitter.com/gatorade"><img style={{width:'30px', margin:'0 0 0 20px'}} src="./imgs/Icon_Twitter.svg" alt="" /></a>
        {/*<a href="https://www.google.com/"><img style={{width:'30px', margin:'0 0 0 20px'}} src="./imgs/Icon_Snapchat.svg" alt="" /></a>*/}
      </div>
    </div>
  );
};


export default Footer;
