import styled from '@emotion/styled';
import { css } from '@emotion/react';
import apiClient from 'services/apiClient';
import { useRef, useCallback } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { getUserIdFromSession } from 'utils/sessionUtils';

export default function UploadButton() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
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
        const userId = getUserIdFromSession(); // 세션에서 사용자 ID 가져오기
        if (!userId) {
          alert('로그인이 필요합니다.');
          return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('uploadUserId', userId.toString());

        const response = await apiClient.post(`/document/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.data.success) {
          console.log('파일 업로드 성공:', response.data.message);
          // TODO: 업로드 성공 시 추가 처리 로직 (알림 또는 UI 업데이트)
        } else {
          console.error('파일 업로드 실패:', response.data.message);
          alert('파일 업로드에 실패했습니다.');
        }
      } catch (error) {
        console.error('파일 업로드 중 오류 발생:', error);
        alert('파일 업로드 중 오류가 발생했습니다.');
      }
    }
  }, []);

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
