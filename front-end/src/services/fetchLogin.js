// import axios from 'axios';

// const fetchlogin = async (email, password) => {
//   const body = { email, password };
//   // const data = await fetch('http://localhost:3001/teste', {
//   //   method: 'POST',
//   //   body: JSON.stringify(body),
//   //   headers: {
//   //     'Content-type': 'application/json; charset=UTF-8',
//   //     'Access-Control-Allow-Origin': '*',
//   //   },
//   // }).then((response) => response.text())
//   //   .then((da) => console.log(da))
//   //   .catch((error) => console.log(error));

//   // axios.post('http://localhost:3001/login', {
//   //   email,
//   //   password,
//   // })
//   //   .then((response) => {
//   //     console.log(response);
//   //   }, (error) => {
//   //     console.log(error);
//   //   });
//   const data = await axios.post(
//     'localhost:3001/teste',
//     body,
//   );
//   // const response = await data.json();
//   console.log(data);

//   return data;
// };

// export default fetchlogin;

import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  // console.log('requestData', data);

  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  // console.log('requestLogin', data);
  return data;
};

// export const requestRegister = async (endpoint, body) => {
//   const { data } = await api.post(endpoint, body);
//   // console.log(data);
//   return data;
// };

export default api;
