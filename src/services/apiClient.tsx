import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 인터셉터 추가
apiClient.interceptors.request.use((request) => {
  console.log('Starting Request', request.url);
  return request;
});

export default apiClient;
