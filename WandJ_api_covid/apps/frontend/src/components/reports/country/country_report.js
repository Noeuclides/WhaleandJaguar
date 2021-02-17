import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';
import { getCodeParams } from '../../../actions/reports';
import CountryDisplay from './country_display';

class CountryReport extends Component {
  componentDidMount(formValues) {
    this.props.getCodeParams(formValues);
  }

  onSubmit = formValues => {
    this.props.getCodeParams(formValues);
  };

  render() {
    return (
      <div className='ui container'>
        <CountryDisplay onSubmit={this.onSubmit} />
        <div className='ui right aligned divided grid' style={{ marginTop: '2rem' }}>
          <div className='center aligned two column row'>
            <div class="column">Country</div>
            <div class="left floated left aligned six wide column">{this.props.reports[0]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Code</div>
            <div class="left floated left aligned six wide column">{this.props.reports[1]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Confirmed</div>
            <div class="left floated left aligned six wide column">{this.props.reports[2]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Recovered</div>
            <div class="left floated left aligned six wide column">{this.props.reports[3]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Deaths</div>
            <div class="left floated left aligned six wide column">{this.props.reports[4]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Critical</div>
            <div class="left floated left aligned six wide column">{this.props.reports[5]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Latitude</div>
            <div class="left floated left aligned six wide column">{this.props.reports[6]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Longitude</div>
            <div class="left floated left aligned six wide column">{this.props.reports[7]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Last Change</div>
            <div class="left floated left aligned six wide column">{this.props.reports[8]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Last Update</div>
            <div class="left floated left aligned six wide column">{this.props.reports[9]}</div>
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