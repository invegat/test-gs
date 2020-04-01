import { GET_QUOTE, POST_GS } from '../actions/events';
// import { ActionImportantDevices } from 'material-ui/svg-icons';
/* eslint-disable no-console, no-case-declarations */
export default (groups = [], action) => {
  switch (action.type) {
    case GET_QUOTE:
      console.log(Object.keys(action.payload))
      const o = action.payload
      return `author: ${o.author}  quote: ${o.text}`
    case POST_GS:
      return action.payload
    default:
      return groups;
  }
};