import React from 'react';
import { connect } from 'react-redux';
import { postGS, getQuote } from '../actions/events'

class GSForm extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handlePost = () => {
    console.log('loading')
    this.props.load()
  }
  render() {
    return (
      <form>
        <div>
          result:
          <textarea value={this.props.value} />
        </div>
        <input type="button" value="Do Post" onClick={this.handlePost} />
      </form>
    );
  }
}

export default connect(
  state => ({
    value: state.tests || "Waiting"
  }),
  dispatch => ({
    load: () => dispatch(postGS()),
    loadQuote: () => dispatch(getQuote())
  })
)(GSForm)