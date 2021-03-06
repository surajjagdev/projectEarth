import React, { Component } from "react";
import Calendar from "react-calendar";

class UserCalendar extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className="container calendar">
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

export default UserCalendar;
