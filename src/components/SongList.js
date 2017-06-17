import React from 'react';

const SongList = (props) => {
  console.log("props on SongList",props);
  // console.log("state on SongList",this.state);

  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    border: '1px solid black'
  };

  return (
    <div style={styles}>
      {
        // this.state.data.map((d, i) => {
        //   return (
        //     <EachSong key={i}>
        //       <EachSongDetails
        //         name={"d.name"}
        //         title={"d.title"}
        //         age={"d.age"}
        //       />
        //     </EachSong>
        //   );
        // })
      }
    </div>
  );
};

const EachSong = ({children}) => {
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    border: '1px solid red'
  };

  return (
    <div style={styles}>
        {children}
    </div>
  );
};

const EachSongDetails = ({name, title, age}) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <h3>{age}</h3>
      </div>
    </div>
  );
};


export default SongList;
