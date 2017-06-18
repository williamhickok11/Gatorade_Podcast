import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'inline-block',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '35%',
  float: 'left',
};

const PodCard = ({children}) => {
  return (
    <div style={{margin: '20px'}}>
      {children}
    </div>
  );
};

const PodCardText = ({title, clickProp, i}) => {
  return (
    <div>
      <div>
        <div className="podcast-list-item" onClick={()=>clickProp(i)}><p>{title}</p></div>
      </div>
    </div>
  );
};

class PodPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
    // console.log("All my song in the PodPicker",props);
  }

  render() {
    // const songData = this.props;
    console.log("podData inside PodPicker render",this.props);
    // console.log("state",this.state)
    return (
      <div style={styles}>

        <div className="page-title">
          <h1>The <br />
              Secret<br />
              <sup><u>To</u></sup> Victory</h1>
          <h6>Brought To You By <strong>Gatorade</strong></h6>
        </div>

        <div style={{width: '80%', margin: '20px auto', marginTop: '100px'}}>

          <div style={{display: 'inline-block', width: '50%'}}>
            <h4>PG</h4>
            <hr style={{width: '80%'}}/>
          </div>
          <div style={{display: 'inline-block',  width: '49%', borderLeft: '1px solid white'}}>
            <h4>Intro</h4>
            <h4>About the Poscast</h4>
            <hr style={{width: '80%'}}/>
          </div>

          <div>
            <div style={{display: 'inline-block', width: '50%'}}>
              {
                this.props.podDataArray.map((d, i) => {
                  return (
                    <p key={i}>0{i+1}</p>
                  );
                })
              }
            </div>
            <div style={{display: 'inline-block', width: '49%', borderLeft: '1px solid white'}}>
              {
                this.props.podDataArray.map((d, i) => {
                  return (
                    <PodCard key={i}>
                      <PodCardText
                        i={d.i}
                        title={d.title}
                        clickProp={this.props.onClickProp}
                      />
                    </PodCard>
                  );
                })
              }
            </div>
          </div>

        </div>

      </div>
    );
  }
}


// Just for validation
PodCardText.propTypes = {
  i: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickProp: PropTypes.func.isRequired,
};
PodPicker.propTypes = {
  onClickProp: PropTypes.func.isRequired,
  podDataArray: PropTypes.array.isRequired,
};

export default PodPicker;


