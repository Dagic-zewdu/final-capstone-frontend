import axios from 'axios';

const httpCommon = (token) => axios.create({
  baseURL: 'https://sleepy-forest-22507.herokuapp.com/api/v1/',
  headers: {
    token,
  },
});

export default httpCommon;
