import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';
import { getCodeDateParams } from '../../../actions/reports';
import CountryDailyDisplay from './country_daily_display';

class CountryDailyReport extends Component {
  componentDidMount(formValues) {
    this.props.getCodeDateParams(formValues);
  }

  onSubmit = formValues => {
    this.props.getCodeDateParams(formValues);
  };

  render() {
    return (
      <div className='ui container'>
        <CountryDailyDisplay onSubmit={this.onSubmit} />
        <div className='ui right aligned divided grid' style={{ marginTop: '2rem' }}>
          <div className='center aligned two column row'>
            <div className="column">Country</div>
            <div className="left floated left aligned six wide column">{this.props.country_daily[0]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Latitude</div>
            <div className="left floated left aligned six wide column">{this.props.country_daily[2]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Longitude</div>
            <div className="left floated left aligned six wide column">{this.props.country_daily[3]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Date</div>
            <div className="left floated left aligned six wide column">{this.props.country_daily[4]}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  country_daily: Object.values(state.reports)
});

export default connect(
  mapStateToProps,
  { getCodeDateParams }
)(CountryDailyReport);