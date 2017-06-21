import React from 'react';
import PropTypes from 'prop-types';

const PodCard = ({children}) => {
  return (
    <div className="pp-loop-div">
      {children}
    </div>
  );
};

const PodCardText = ({currentIndex, isActive, title, clickProp, i}) => {
  let activeClass = "podcast-list-item";
  if (isActive === false) {
    activeClass += " pp-inactive";
  }
  return (
      <div className={activeClass} onClick={()=>clickProp(i)}>
        <p className={currentIndex == i ? "selected" : ""}>{title}</p>
      </div>
  );
};

class PodPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pp-main-outer">
        <div className="pp-main-inner">
          <div className="pp-left">
            <div className="pp-top">
              <h4>PG</h4>
            </div>
            <div className="pp-bottom">
              <div className="pp-inner-left">
                <h4>EP</h4>
              </div>
              <div className="pp-inner-right">
                {
                  this.props.podDataArray.map((d, i) => {
                    let activeClass = "pp-loop-div";
                    if (d.isActive === false) {
                      activeClass += " pp-inactive";
                    }
                    return (
                      <div key={i} className={activeClass}>
                        <p>0{i+1}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="pp-right">
            <div className="pp-top">
              <div>
                <h3 onClick={this.props.goToIntroView}>INTRO</h3>
              </div>
              <div>
                <h3 onClick={this.props.goToAboutView}>ABOUT</h3>
              </div>
            </div>
            <div className="pp-selector">
              {
                this.props.podDataArray.map((d, i) => {
                  return (
                    <PodCard key={i}>
                      <PodCardText
                        currentIndex= {this.props.index}
                        isActive = {d.isActive}
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
        <div className="pp-main-inner-mobile">
          <div className="pp-loop-div-mobile ppld-mobile">
            {/*<input type="button" disabled="true" value="INTRO" onClick={this.props.goToIntroView} />*/}
            <p onClick={this.props.goToIntroView}>INTRO</p>
            <div className="verticle-line" />
          </div>
          <div className="pp-loop-div-mobile ppld-mobile">
            <p onClick={this.props.goToAboutView}>ABOUT</p>
            <div className="verticle-line" />
          </div>
          {
            this.props.podDataArray.map((d, i) => {
              let activeClass = "pp-loop-div-mobile";
              if (d.isActive === false) {
                activeClass += " pp-inactive";
              }
              return (
                <div key={i} className={activeClass} onClick={()=>this.props.onClickProp(i)}>
                  <p className={this.props.index == i ? "selected" : ""}>0{i+1}</p>
                  <div className="verticle-line" />
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
  goToIntroView: PropTypes.func.isRequired,
  goToAboutView: PropTypes.func.isRequired,
};

export default PodPicker;


