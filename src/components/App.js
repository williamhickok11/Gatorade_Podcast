import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SongPicker from './SongPicker';
import Banner from './Banner';
import Details from './Details';
// const CLAudioPlayer = require ('react-cl-audio-player');
// import CLAudioPlayer from 'react-cl-audio-player';

let i = 0;
let songs = [
  {
    index: 0,
    url: 'http://tegos.kz/new/mp3_full/Redfoo_-_New_Thang.mp3',
    cover: 'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg',
    artist: {
      name: 'Redfoo',
      song: 'New Thang'
    }
  },
  {
    index: 1,
    url: 'http://a.tumblr.com/tumblr_lpoc6cHNDP1r0jthjo1.mp3',
    cover: 'http://www.thailandballoonfestival.com/tibf2013/images/HugoSlider1.jpg',
    artist: {
      name: 'Hugo',
      song: '99 Problems'
    }
  },
  {
    index: 2,
    url: 'http://claymore.france.free.fr/momo/summer love.mp3',
    cover: 'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
    artist: {
      name: 'Justin Timberlake',
      song: 'Summer Love'
    }
  },
  {
    index: 3,
    url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
    cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
    artist: {
      name: 'Daft Punk',
      song: 'Get Lucky'
    }
  },
  {
    index: 4,
    url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
    cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
    artist: {
      name: 'Michael Buble',
      song: 'Feeling Good'
    }
  },
  {
    index: 5,
    url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
    cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
    artist: {
      name: 'The Weekend',
      song: 'Can\'t Fell My Face'
    }
  },
  {
    index: 6,
    url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
    cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
    artist: {
      name: 'Metallica',
      song: 'Fuel'
    }
  }
];


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data:[{
      //   url: "",
      //   cover: "",
      //   artist: {
      //     name: "",
      //     song: ""
      //   }
      // }],
      data:[],
      bannerImageData:[],
      title:"hello title",
      songs: [
        {
          url: 'path/to/your/mp3',
          artist: {
            name: 'X Japan',
            song: 'Art of Life'
          }
        }
      ]
    };
    // console.log("props",props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // axios.get(this.props.ogPropData)
    // .then((result)=> {
    //   console.log("result",result);
    //   // const thisData = result.data;
    //   // console.log("result.data",result.data);
    //   this.setState({
    //     data: result.data.songList
    //   });
    //   console.log("SONGS after axios",this.state);
    // });
  }

  handleClick(value, e) {
    console.log("value",value);
    console.log("e",e);
    // Change the state here
    console.log("this is going to update the song");
  }

  render() {
    console.log("data about to be sent as a prop to SongPicker",this.state.data);
    return (
      <div>
        <Banner
          changeEveryonesState = {this.handleClick}
          data = {songs[i]}
        />
        <SongPicker
          onClickProp = {this.handleClick}
          songDataArray = {songs}
        />
        <Details
          songDataArray = {songs}
          // currentSong = {}
        />
      </div>
    );
  }
}

App.propTypes = {
  // store: PropTypes.object.isRequired,
  // history: PropTypes.object.isRequired
};
