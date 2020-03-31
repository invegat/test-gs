import { GET_EVENTS } from '../actions/events';
/* eslint-disable no-console, no-case-declarations */
export default (groups = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload;
    default:
      return groups;
  }
};