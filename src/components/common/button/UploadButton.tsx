import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AiOutlinePlus } from 'react-icons/ai';

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

export default function UploadButton() {
  return (
    <Button>
      <AiOutlinePlus />
      PDF 업로드
    </Button>
  );
}
