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
            <div className="column">Country</div>
            <div className="left floated left aligned six wide column">{this.props.reports[0]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Code</div>
            <div className="left floated left aligned six wide column">{this.props.reports[1]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Confirmed</div>
            <div className="left floated left aligned six wide column">{this.props.reports[2]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Recovered</div>
            <div className="left floated left aligned six wide column">{this.props.reports[3]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Deaths</div>
            <div className="left floated left aligned six wide column">{this.props.reports[4]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Critical</div>
            <div className="left floated left aligned six wide column">{this.props.reports[5]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Latitude</div>
            <div className="left floated left aligned six wide column">{this.props.reports[6]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Longitude</div>
            <div className="left floated left aligned six wide column">{this.props.reports[7]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Last Change</div>
            <div className="left floated left aligned six wide column">{this.props.reports[8]}</div>
          </div>
          <div className='center aligned two column row'>
            <div className="column">Last Update</div>
            <div className="left floated left aligned six wide column">{this.props.reports[9]}</div>
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