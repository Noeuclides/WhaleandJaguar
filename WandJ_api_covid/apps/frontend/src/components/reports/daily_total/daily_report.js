import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';
import { getParams } from '../../../actions/reports';
import ReportDisplay from './daily_report_display';

class Report extends Component {
  componentDidMount(formValues) {
    this.props.getParams(formValues);
  }

  onSubmit = formValues => {
    this.props.getParams(formValues);
  };

  render() {
    return (
      <div className='ui container'>
        <ReportDisplay onSubmit={this.onSubmit} />
        <div className='ui right aligned divided grid' style={{ marginTop: '2rem' }}>
          <div className='center aligned two column row'>
            <div class="column">Critical</div>
            <div class="left floated left aligned six wide column">{this.props.reports[0]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Deaths</div>
            <div class="left floated left aligned six wide column">{this.props.reports[1]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Active</div>
            <div class="left floated left aligned six wide column">{this.props.reports[2]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Recovered</div>
            <div class="left floated left aligned six wide column">{this.props.reports[3]}</div>
          </div>
          <div className='center aligned two column row'>
            <div class="column">Confirmed</div>
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
  { getParams }
)(Report);