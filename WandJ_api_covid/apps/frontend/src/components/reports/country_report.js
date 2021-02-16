import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';
import { getCodeParams } from '../../actions/reports';
import CountryDisplay from './daily_country_display';

class CountryReport extends Component {
  componentDidMount(formValues) {
    console.log(`QUEJESTOO!! ${JSON.stringify(this.props)}`)
    this.props.getCodeParams(formValues);
  }

  onSubmit = formValues => {
    console.log(`FORM SUMBIMIT report ${JSON.stringify(formValues)}`)
    this.props.getCodeParams(formValues);
  };

  render() {
    return (
      <div>
      <CountryDisplay onSubmit={this.onSubmit}/>
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        { console.log(`PROPS!!! ${JSON.stringify(this.props)}`) }
          <div className='item'>
            <div className='content'>
              <a className='header'>Country</a>
              <div className='description'>{this.props.reports[0]}</div>
              <a className='header'>Code</a>
              <div className='description'>{this.props.reports[1]}</div>
              <a className='header'>Confirmed</a>
              <div className='description'>{this.props.reports[2]}</div>
              <a className='header'>Recovered</a>
              <div className='description'>{this.props.reports[3]}</div>
              <a className='header'>Deaths</a>
              <div className='description'>{this.props.reports[4]}</div>
              <a className='header'>Critical</a>
              <div className='description'>{this.props.reports[5]}</div>
              <a className='header'>Latitude</a>
              <div className='description'>{this.props.reports[6]}</div>
              <a className='header'>Longitude</a>
              <div className='description'>{this.props.reports[7]}</div>
              <a className='header'>Last Change</a>
              <div className='description'>{this.props.reports[8]}</div>
              <a className='header'>Last Update</a>
              <div className='description'>{this.props.reports[9]}</div>
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
  { getCodeParams }
)(CountryReport);