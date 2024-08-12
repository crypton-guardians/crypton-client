import apiClient from "services/apiClient";

interface fileUploadType {
    file : string,
    uploadUser : number,
}


//파일 업로드 api
export const fileUpload = async (params : fileUploadType) => {
    try {
        const response = await apiClient.post('/document/upload', params);
        return response.data
    } catch (error) {
        console.log(error)
    }
}


//파일 다운로드 api
export const fileDownload = async (params : object) => {
    try {
        const response = await apiClient.get('/document/download')
        return response.data
    } catch (error) {
        console.log(error)
    }
}