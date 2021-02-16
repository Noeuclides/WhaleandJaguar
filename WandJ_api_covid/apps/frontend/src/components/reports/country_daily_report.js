import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';
import { getCodeDateParams } from '../../actions/reports';
import CountryDailyDisplay from './country_daily_display';

class CountryDailyReport extends Component {
  componentDidMount(formValues) {
    console.log(`QUEJESTOO!! ${JSON.stringify(this.props)}`)
    this.props.getCodeDateParams(formValues);
  }

  onSubmit = formValues => {
    console.log(`FORM SUMBIMIT report ${JSON.stringify(formValues)}`)
    this.props.getCodeDateParams(formValues);
  };

  render() {
    return (
      <div>
      <CountryDailyDisplay onSubmit={this.onSubmit}/>
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        { console.log(`PROPS!!! ${JSON.stringify(this.props)}`) }
          <div className='item'>
            <div className='content'>
              <a className='header'>Country</a>
              <div className='description'>{this.props.reports[0]}</div>
              <a className='header'>Latitude</a>
              <div className='description'>{this.props.reports[2]}</div>
              <a className='header'>Longitude</a>
              <div className='description'>{this.props.reports[3]}</div>
              <a className='header'>Date</a>
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
  { getCodeDateParams }
)(CountryDailyReport);