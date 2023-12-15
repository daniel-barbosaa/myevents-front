import axios from 'axios';

const apiEventsSympla = axios.create({
  baseURL: 'https://api.sympla.com.br/public/v4/events',
  headers: {
    s_token: '22bd2d0ac2b8da9b09bec3f0270c1c394f5908f85aded57ec4f8d5aea23b798c',
  },
});

export default apiEventsSympla;
