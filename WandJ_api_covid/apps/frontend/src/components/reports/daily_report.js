import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';
import { getParams } from '../../actions/reports';
import ReportDisplay from './daily_report_display';

class Report extends Component {
  componentDidMount(formValues) {
    console.log(`QUEJESTOO!! ${JSON.stringify(this.props)}`)
    this.props.getParams(formValues);
  }

  onSubmit = formValues => {
    console.log(`FORM SUMBIMIT report ${JSON.stringify(formValues)}`)
    this.props.getParams(formValues);
  };

  render() {
    return (
      <div>
      <ReportDisplay onSubmit={this.onSubmit}/>
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        { console.log(`PROPS!!! ${JSON.stringify(this.props)}`) }
          <div className='item'>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <a className='header'>Critical</a>
              <div className='description'>{this.props.reports[0]}</div>
              <a className='header'>Deaths</a>
              <div className='description'>{this.props.reports[1]}</div>
              <a className='header'>Active</a>
              <div className='description'>{this.props.reports[2]}</div>
              <a className='header'>Recovered</a>
              <div className='description'>{this.props.reports[3]}</div>
              <a className='header'>Confirmed</a>
              <div className='description'>{this.props.reports[4]}</div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reports: Object.values(state.reports)
});

export default connect(
  mapStateToProps,
  { getParams }
)(Report);