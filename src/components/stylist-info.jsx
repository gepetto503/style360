import React from 'react';
import PropTypes from 'prop-types';
// import '../stylesheets/stylist-info.css';
import StylistPic from './stylist-pic';

const StylistInfo = (props) => {
  return (
    <div>
      <StylistPic></StylistPic>
      <h2 className="a-class">{props.inputData.details.firstName}</h2>
    </div>
  )
}

StylistInfo.propTypes = {
  someProp: PropTypes.string
};

export default StylistInfo
