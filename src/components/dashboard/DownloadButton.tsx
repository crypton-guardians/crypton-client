import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { BsDownload } from 'react-icons/bs';

export default function DownloadButton() {
  return (
    <Button>
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
