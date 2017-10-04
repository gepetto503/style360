import React from 'react';
import PropTypes from 'prop-types';
import StylistPic from './stylist-pic';
import Icons from './icons';
import Buttons from './buttons'

const StylistInfo = (props) => {
  return (
    <div>
      <div className="page">
        <div className="background">
          <div className="stylist-info">
            <div className="stylist-pic">
              <StylistPic picUrl={props.inputData.details.picUrl}>
              </StylistPic>
            </div>
            <div className="stylist-other-stuff">
              <div className="stylist-text">
                <div className="name-and-summary">
                  <h1>{props.inputData.details.firstName} {props.inputData.details.lastName}</h1>
                  <h2>{props.inputData.details.summary}</h2>
                </div>
                <div className="show-on-tablet">
                  <Buttons labels={['appointments','refer','message']}></Buttons>
                </div>
                <div className="address-and-phone show-on-tablet">
                  <p>{props.inputData.details.location.address1}, {props.inputData.details.location.city} {props.inputData.details.location.st} {props.inputData.details.location.zip}</p>
                  <p>{props.inputData.details.location.number}</p>
                </div>
              </div>
              <div className="show-on-mobile">
                <Icons></Icons>
                <Buttons labels={['map','call']}></Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StylistInfo
