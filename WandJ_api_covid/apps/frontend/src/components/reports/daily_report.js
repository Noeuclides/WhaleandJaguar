import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReport } from '../../actions/reports';

class Report extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getReport();
  }

  render() {
    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        { console.log(`PROPS!!! ${this.props.reports}`) }
        {this.props.reports.map(report => (
          <div className='item' key={report}>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>{report}</a>
              <div className='description'>{report}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reports: Object.values(state.reports)
});

export default connect(
  mapStateToProps,
  { getReport }
)(Report);