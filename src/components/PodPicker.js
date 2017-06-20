import React from 'react';
import PropTypes from 'prop-types';

const PodCard = ({children}) => {
  return (
    <div className="pod-picker-loop-div">
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
  }

  render() {
    return (
      <div className="pod-picker-main-outer">
        <div className="pod-picker-main-inner">
          <div className="pod-picker-left">
            <div className="pod-picker-top">
              <h4>PG</h4>
            </div>
            <div className="pod-picker-bottom">
              <div className="pod-picker-inner-left">
                <h4>EP</h4>
              </div>
              <div className="pod-picker-inner-right">
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
          <div className="pod-picker-right">
            <div className="pod-picker-top">
              <div>
                <h3 onClick={this.props.introViewButton}>INTRO</h3>
              </div>
              <div>
                <h3>ABOUT</h3>
              </div>
            </div>
            <div className="pod-picker-selector">
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

        {/**** MOBILE VIEW ****/}
        <div className="pod-picker-main-inner-mobile">
          {
            this.props.podDataArray.map((d, i) => {
              return (
                <div key={i} className="pod-picker-loop-div-mobile" onClick={()=>this.props.onClickProp(i)}>
                  <p>0{i+1}</p>
                </div>
              );
            })
          }
        </div>

      </div>
    );
  }
}


{/**** Just for validation ****/}
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


