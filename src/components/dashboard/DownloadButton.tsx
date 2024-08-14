import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BsDownload } from 'react-icons/bs';
import apiClient from 'services/apiClient';

interface DownloadButtonProps {
  fileId: string; // 다운로드할 파일의 ID
}

export default function DownloadButton({ fileId }: DownloadButtonProps) {
  const handleDownload = async () => {
    try {
      const response = await apiClient.get(`/document/${fileId}/download`, {
        responseType: 'blob', // 파일 데이터를 바이너리 형태로 받기 위해 responseType을 설정
      });

      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', response.headers['content-disposition'].split('filename=')[1]);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('파일 다운로드 중 오류 발생:', error);
    }
  };

  return (
    <Button onClick={handleDownload}>
      <BsDownload />
      다운로드
    </Button>
  );
}

const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 50px;
    border: none;
    border-radius: 14px;
    color: ${theme.colors.key[100]};
    ${theme.typography.uploadBtn}
    transition: background-color 0.5s ease;
    background: ${theme.colors.gradient.keyGradient};
    cursor: pointer;

    &:hover {
      background: ${theme.colors.gradient.keyGradientHover};
    }

    svg {
      margin-right: 8px;
      fill: ${theme.colors.key[100]};
      transform: scale(1.1);
    }
  `}
`;
