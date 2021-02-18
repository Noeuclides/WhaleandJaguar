import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCodeDateParams } from '../../../actions/reports';
import CountryDailyForm from './CountryDailyForm';

class CountryDailyDisplay extends Component {
  onSubmit = formValues => {
    this.props.getCodeDateParams(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <CountryDailyForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { getCodeDateParams }
)(CountryDailyDisplay);