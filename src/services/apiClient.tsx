import axios from 'axios';

//로그인 및 회원가입 관련 api 연동 컴포넌트

const apiClient = axios.create({
  baseURL: 'http://www.crython.shop:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
