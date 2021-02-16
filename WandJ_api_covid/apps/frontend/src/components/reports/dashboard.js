import React, { Component } from 'react';
import Report from './daily_report';
import ReportDisplay from './daily_report_display';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Covid Reports</div>
        <Report />
      </div>
    );
  }
}

export default Dashboard;