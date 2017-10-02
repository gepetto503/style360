import React from 'react';
import appointmentsIcon from '../images/calendar.png';

const AppointmentsIcon = (props) => {
  return (
    <div className="icon-circle">
      <img src={appointmentsIcon} className="appointments-icon"></img>
    </div>
  )
}

export default AppointmentsIcon;
