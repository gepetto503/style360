import React from 'react';
import PropTypes from 'prop-types';
import StylistPic from './stylist-pic';
import Icons from './icons';
import Buttons from './buttons';

const StylistInfo = (props) => {
  return (
    <div>
      <div className="page">
        <div className="background">
          <div className="stylist-info">
            <StylistPic picUrl={props.inputData.details.picUrl}>
            </StylistPic>
            <div className="stylist-text">
              <h1>{props.inputData.details.firstName} {props.inputData.details.lastName}</h1>
              <h4>{props.inputData.details.summary}</h4>
            </div>
            <Icons></Icons>
            <Buttons></Buttons>
          </div>
        </div>
      </div>
    </div>
  )
}



export default StylistInfo
