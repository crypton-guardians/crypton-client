import apiClient from "services/apiClient";

//로그인 api
export const login = async (params: object) => {
    try{
        const response = await apiClient.post('/login', params);
        return response.data;
    }catch (error){
        throw "에러 : "+error
    }
}

//회원가입 api
export const signup = async (params: object) => {
    try{
        const response = await apiClient.post('/signup', params);
        return response.data;
    }catch (error){
        throw "에러 : "+error
    }
}
