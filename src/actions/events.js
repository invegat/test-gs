import axios from 'axios';
import body from './gsbody'

export const GET_EVENTS = 'GET_EVENTS';
export const POST_ERROR = 'POST_ERROR'
export const postError = error => ({
  type: POST_ERROR,
  payload: error
})
const ROOT_URL =
  process.env.NODE_ENV === 'production' ? 'https://o9ktamo0f2.execute-api.us-east-1.amazonaws.com/dev/app/' :
    'http://localhost:5000/dev/api';

axios.defaults.withCredentials = true;

export const getEvents = () => dispatch => {
  // const token = sessionStorage.getItem('token');
  // const id = sessionStorage.getItem('id');
  // if (!id || !token) {
  //   dispatch(authError('Not logged in'));
  //   return;
  // }
  // const config = {
  //   headers: {
  //     authorization: token,
  //   },
  // };
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }
  axios
    // .get(`${ROOT_URL}/events`, config)
    .post(`${ROOT_URL}`, body, config)
    .then(response => {
      console.log(`getEvents data: ${response.data}`);
      dispatch({
        type: GET_EVENTS,
        payload: response.data || [],
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(postError('Failed to fetch events'));
    });
};