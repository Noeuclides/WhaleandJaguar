import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getParams } from '../../../actions/reports';
import ReportForm from './daily_report_form';

class ReportDisplay extends Component {
  onSubmit = formValues => {
    this.props.getParams(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <ReportForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { getParams }
)(ReportDisplay);