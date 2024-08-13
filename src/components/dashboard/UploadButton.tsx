import styled from '@emotion/styled';
import { css } from '@emotion/react';
import apiClient from 'services/apiClient';
import { useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

export default function UploadButton() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log('Selected file:', file);

    if (file) {
      // 확장자 체크
      if (file.type !== 'application/pdf') {
        alert('PDF 파일만 업로드할 수 있습니다.');
        return;
      }

      // 파일 크기 체크 (10MB = 10 * 1024 * 1024 바이트)
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('파일 크기는 10MB 이하로 업로드해주세요.');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('file', file);

        // sessionStorage에서 사용자 ID 가져오기
        const uploadUserId = sessionStorage.getItem('userId');
        if (uploadUserId) {
          formData.append('uploadUserId', uploadUserId);
        } else {
          console.error('업로드 사용자 ID가 없습니다.');
          return;
        }

        const response = await apiClient.post(`/document/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.data.success) {
          console.log('파일 업로드 성공:', response.data.message);
          // NOTE: 업로드 성공 시 추가 처리 로직 (알림 또는 UI 업데이트)
        } else {
          console.error('파일 업로드 실패:', response.data.message);
          // NOTE: 업로드 실패 시 처리 로직 (오류 메시지 표시)
        }
      } catch (error) {
        console.error('파일 업로드 중 오류 발생:', error);
        // NOTE: 네트워크 오류 등 예외 처리
      }
    }
  };

  return (
    <>
      <Button onClick={handleButtonClick}>
        <AiOutlinePlus />
        PDF 업로드
      </Button>
      <HiddenFileInput ref={fileInputRef} type="file" accept=".pdf" onChange={handleFileChange} />
    </>
  );
}

const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 50px;
    border: none;
    border-radius: 14px;
    color: ${theme.colors.key[100]};
    ${theme.typography.uploadBtn}
    transition: background-color 0.5s ease;
    background: ${theme.colors.gradient.keyGradient};

    &:hover {
      background: ${theme.colors.gradient.keyGradientHover};
    }

    svg {
      margin-right: 8px;
      fill: ${theme.colors.key[100]};
      transform: scale(1.2);
    }
  `}
  cursor: pointer;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
