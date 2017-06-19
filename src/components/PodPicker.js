import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'inline-block',
  fontFamily: '"Source Code Pro", monospace',
  width: '35%',
  float: 'left',
};

const PodCard = ({children}) => {
  return (
    <div className="pod-picker-loop-div" style={{}}>
      {children}
    </div>
  );
};

const PodCardText = ({title, clickProp, i}) => {
  return (
      <div className="podcast-list-item" onClick={()=>clickProp(i)}>
        <p>{title}</p>
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
    // console.log("podData inside PodPicker render",this.props);
    // console.log("state",this.state)
    return (
      <div style={styles}>
        <div style={{width: '80%', margin: '20px auto', marginTop: '100px'}}>
          <div className="pod-picker-left" style={{display: 'inline-block', width: '30%', float:'left'}}>
            <div className="pod-picker-top">
              <h4>PG</h4>
            </div>
            <div className="pod-picker-bottom">
              <div className="pod-picker-inner-left" style={{display: 'inline-block', width: '20%', float:'left'}}>
                <h4>EP</h4>
              </div>
              <div className="pod-picker-inner-right" style={{display: 'inline-block', width: '50%', float:'right'}}>
                {
                  this.props.podDataArray.map((d, i) => {
                    return (
                      <div key={i} className="pod-picker-loop-div">
                        <p>0{i+1}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="pod-picker-right" style={{borderLeft: '1px solid white', display: 'inline-block',  width: '60%', paddingLeft:'20px'}}>
            <div className="pod-picker-top">
              <div>
                <h4 onClick={this.props.introViewButton}>INTRO</h4>
              </div>
              <div>
                <h4>ABOUT</h4>
              </div>
            </div>
            <div style={{display: 'inline-block'}}>
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
  introViewButton: PropTypes.func.isRequired,
};

export default PodPicker;


