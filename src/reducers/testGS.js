import { POST_GS } from '../actions/events';
// import { ActionImportantDevices } from 'material-ui/svg-icons';
/* eslint-disable no-console, no-case-declarations */
export default (groups = [], action) => {
  switch (action.type) {
    case POST_GS:
      return action.payload
    default:
      return groups;
  }
};