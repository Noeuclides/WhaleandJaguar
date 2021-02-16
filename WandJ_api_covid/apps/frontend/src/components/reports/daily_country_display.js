import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCodeParams } from '../../actions/reports';
import CountryForm from './daily_country_form';

class CountryDisplay extends Component {
  onSubmit = formValues => {
    console.log(`FORM SUMBIMIT display ${JSON.stringify(formValues)}`)
    this.props.getCodeParams(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <CountryForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { getCodeParams }
)(CountryDisplay);