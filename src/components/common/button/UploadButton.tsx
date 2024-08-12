import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AiOutlinePlus } from 'react-icons/ai';

export default function UploadButton() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // NOTE: 파일 처리 로직을 추가 예정
      console.log('Selected file:', file);
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
    transition: background-color 0.3s ease;
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
