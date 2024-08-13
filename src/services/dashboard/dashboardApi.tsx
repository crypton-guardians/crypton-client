import axios from "axios";
import apiClient from "services/apiClient";



export const securityReport = async (fileId: string) => {
    try {
      const response = await apiClient.get('/document/'+fileId+'/report');
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // 서버에서 반환된 에러 메시지 처리
        throw new Error(error.response?.data.message);
      } else {
        // 네트워크 오류 또는 다른 이유로 요청이 실패한 경우
        throw new Error('Network error or server is unreachable');
      }
    }
  };