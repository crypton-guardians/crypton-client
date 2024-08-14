// import apiClient from "services/apiClient";

// interface fileUploadType {
//     file : string,
//     uploadUser : number,
// }

// //파일 업로드 api
// export const fileUpload = async (params : fileUploadType) => {
//     try {
//         const response = await apiClient.post('/document/upload', params);
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

// //파일 다운로드 api
// export const fileDownload = async (params : object) => {
//     try {
//         const response = await apiClient.get('/document/download')
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

// 수정 후
import apiClient from 'services/apiClient';

// 파일 다운로드 API
export const fileDownload = async (documentId: number) => {
  try {
    const response = await apiClient.get(`/document/${documentId}/download`, {
      responseType: 'blob',
    });
    const contentDisposition = response.headers['content-disposition'];
    const fileName = contentDisposition
      ? contentDisposition.split('filename=')[1].replace(/"/g, '')
      : `document-${documentId}.pdf`;

    // Blob 객체 생성
    const blob = new Blob([response.data], { type: 'application/pdf' });

    // 다운로드 링크 생성 및 클릭
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // URL 객체 해제
    window.URL.revokeObjectURL(downloadUrl);

    return fileName;
  } catch (error) {
    console.error('File download error:', error);
    throw error;
  }
};
