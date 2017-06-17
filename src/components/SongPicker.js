import React from 'react';
import SongList from './SongList';



const SongPicker = (props) => {
  console.log("click",props)
  return (
    <div>
        <h1>Hello</h1>
        <SongList />
        <button onClick = {props.onClickProp} >try me</button>
    </div>
  );
};

export default SongPicker;
// <button onClick = {props.onClickProp()} >try me</button>
