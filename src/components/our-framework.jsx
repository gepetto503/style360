import React from 'react';
import EventList from './event-list';

class OurFramework extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "October",
      date: "27",
      year: "2017"
    }
  }
  render() {
    return(
      <div className="campus">
        <EventList
          month={this.state.month}
          date={this.state.date}
          year={this.state.year}
           />
      </div>
    )
  }
}

export default OurFramework;
