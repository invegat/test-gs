import { GET_QUOTE } from '../actions/events';
// import { ActionImportantDevices } from 'material-ui/svg-icons';
/* eslint-disable no-console, no-case-declarations */
export default (quote = "", action) => {
  switch (action.type) {
    case GET_QUOTE:
      const o = action.payload
      return `author: ${o.author}  quote: ${o.text}`
    default:
      return quote
  }
}