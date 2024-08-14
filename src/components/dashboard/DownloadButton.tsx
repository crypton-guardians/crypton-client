import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { fileDownload } from 'services/file/fileApi';
import { BsDownload } from 'react-icons/bs';

interface DownloadButtonProps {
  fileId: string;
}

export default function DownloadButton({ fileId }: DownloadButtonProps) {
  const handleDownload = async () => {
    try {
      const fileName = await fileDownload(Number(fileId));
      console.log(`${fileName} 다운로드 완료`);
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
