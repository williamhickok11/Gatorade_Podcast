import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SongPicker from './SongPicker';
import Banner from './Banner';
import Details from './Details';





export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {data:[]};
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then((result)=> {
      // const thisData = result.data;
      this.setState({
        data: result.data.jsonData
      });
    });
  }

  render() {
    return (
      <div>
        <Banner
          url = "get the url from an ajax call"
        />
        <SongPicker />
        <Details />
      </div>
    );
  }
}

App.propTypes = {
  // store: PropTypes.object.isRequired,
  // history: PropTypes.object.isRequired
};
