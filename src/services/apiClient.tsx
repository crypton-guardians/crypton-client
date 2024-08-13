import axios from 'axios';

//로그인 및 회원가입 관련 api 연동 컴포넌트

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
