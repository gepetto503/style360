import React from 'react';

const EventList = (props) => {
  return (
    <div className="el-container">
      <div className="el-bg-image">
        <div className="el-content">
          <div className="el-purple-block">
            <h5>{props.month}</h5>
            <h3>{props.date}</h3>
            <h4>{props.year}</h4>
          </div>
          <div className="el-details">
            <h5 className="uppercase">Live Session</h5>
            <h3>Tamara Dayton</h3>
            <h4>Advanced Coloring</h4>
            <h5 className="el-time">3:30pm-5pm</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventList;
