import React, { Component } from 'react';
import Report from './daily_total/DailyReport';
import ReportDisplay from './daily_total/DailyReportDisplay';

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