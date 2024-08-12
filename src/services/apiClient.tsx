import axios from "axios";

//로그인 및 회원가입 관련 api 연동 컴포넌트

const apiClient = axios.create({
    baseURL: 'http://35.237.68.73:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default apiClient;