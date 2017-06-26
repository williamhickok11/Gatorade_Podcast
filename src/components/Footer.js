import React from 'react';

const Footer = () => {
  // console.log("props",props);

  return (
    <div className="footer-main">
      <div className="hash-tag-mobile">
        <div>
          <p>#makedefeatyourfuel</p><p>#winfromwithin</p>
        </div>
      </div>
      <hr style={{height:'1px', border:'none', margin:'5px 0 20px 0', color:'#AFA193', backgroundColor:'#AFA193', width:'100%'}} />
      <div className="footer-third gim-im">
        <a target="_blank" href="http://creative.gimletmedia.com/"><img style={{width:'75px'}} src="../imgs/GC_flag.png" alt="" /></a>
      </div>
      <div className="footer-third hash-tag">
        <p>#makedefeatyourfuel</p><p>#winfromwithin</p>
      </div>
      <div style={{textAlign:'right'}} className="footer-third footer-icons">
        <a target="_blank" href="https://www.instagram.com/gatorade/"><img style={{width:'30px', margin:'0 0 0 20px'}} src="../imgs/Icon_instagram.png" alt="" /></a>
        <a target="_blank" href="https://www.facebook.com/Gatorade/"><img style={{width:'30px', margin:'0 0 0 20px'}} src="../imgs/Icon_Fb.svg" alt="" /></a>
        <a target="_blank" href="https://twitter.com/gatorade"><img style={{width:'30px', margin:'0 0 0 20px'}} src="../imgs/Icon_Twitter.svg" alt="" /></a>
        {/*<a target="_blank" href="https://www.google.com/"><img style={{width:'30px', margin:'0 0 0 20px'}} src="../imgs/Icon_Snapchat.svg" alt="" /></a>*/}
      </div>
    </div>
  );
};


export default Footer;
