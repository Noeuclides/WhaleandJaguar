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
            <div class="column">Country</div>
            <div class="left floated left aligned six wide column">{this.props.reports[0]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Latitude</div>
            <div class="left floated left aligned six wide column">{this.props.reports[2]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Longitude</div>
            <div class="left floated left aligned six wide column">{this.props.reports[3]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Date</div>
            <div class="left floated left aligned six wide column">{this.props.reports[4]}</div>
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