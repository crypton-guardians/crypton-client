import axios from "axios";
import apiClient from "services/apiClient";

interface authParamsType {
    username : string,
    password : string
}


//로그인 api
export const login = async (params: authParamsType) => {    
    try{
        const response = await apiClient.post('/user/login', params);
        return response;
    }catch (error){
        if (axios.isAxiosError(error)) {
            // 서버에서 반환된 에러 메시지 처리
            throw new Error(error.response?.data.message || 'Login failed');    
        } else {
            // 네트워크 오류 또는 다른 이유로 요청이 실패한 경우
            throw new Error('Network error or server is unreachable');
        }
    }
}

//회원가입 api
export const signup = async (params: authParamsType) => {
    try{
        const response = await apiClient.post('/user/register', params);
        return response;
    }catch (error){
        if (axios.isAxiosError(error)) {
            // 서버에서 반환된 에러 메시지 처리
            throw new Error(error.response?.data.message);    
        } else {
            // 네트워크 오류 또는 다른 이유로 요청이 실패한 경우
            throw new Error('Network error or server is unreachable');
        }
    }
}

//아이디 중복 체크
export const checkDuplicateUser = async (username: string) => {
    try{
        const response = await apiClient.get('/user/check-username?username='+username);
        return response;
    }catch (error){
        if (axios.isAxiosError(error)) {
            // 서버에서 반환된 에러 메시지 처리
            throw new Error(error.response?.data.message);    
        } else {
            // 네트워크 오류 또는 다른 이유로 요청이 실패한 경우
            throw new Error('Network error or server is unreachable');
        }
    }    
}