import axios from 'axios';
import body from './gsbody'

export const POST_GS = 'POST_GS';
export const GET_QUOTE = "GET_QUOTE"
export const POST_ERROR = 'POST_ERROR'
export const postError = error => ({
  type: POST_ERROR,
  payload: error
})
const ROOT_URL =
  process.env.NODE_ENV === 'production' ? 'https://o9ktamo0f2.execute-api.us-east-1.amazonaws.com/dev' :
    'http://localhost:5000';

axios.defaults.withCredentials = false;

export const getQuote = () => dispatch => {
  axios
    .get(`${ROOT_URL}/quote`)
    .then(response => {
      dispatch({
        type: GET_QUOTE,
        payload: response.data || []
      })
    })
    .catch((err) => {
      console.log(err);
      dispatch(postError('Failed to fetch quote'));
    });
}

export const postGS = () => dispatch => {
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
      'Content-Type': 'application/json'
    }
  }
  axios
    .post(`${ROOT_URL}/app/data`, body, config)
    .then(response => {
      console.log(Object.keys(response))
      console.log(Object.keys(response.data))
      console.log(`getEvents data: ${response.data}`);
      dispatch({
        type: POST_GS,
        payload: JSON.stringify(response.data) || [],
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(postError('Failed to fetch events'));
    });
};