import React from 'react';
import { connect } from 'react-redux';
import { postGS, getQuote } from '../actions/events'

class GSForm extends React.Component {
  render() {
    return (
      <form>
        <div>
          result:
          <textarea value={this.props.value} rows="10" cols="20" />
        </div>
        <input type="button" value="Do Post" onClick={this.props.load} />
        <div>
          quote:
          <textarea value={this.props.quote} rows="3" cols="50" />
        </div>
        <input type="button" value="Get Quote" onClick={this.props.loadQuote} />
      </form>
    );
  }
}

export default connect(
  state => ({
    value: state.tests.length === 0 ? "Waiting" : state.tests,
    quote: state.quote.length === 0 ? "Waiting" : state.quote
  }),
  dispatch => ({
    load: () => dispatch(postGS()),
    loadQuote: () => dispatch(getQuote())
  })
)(GSForm)