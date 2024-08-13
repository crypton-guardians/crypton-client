import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';

interface ModalWrapperProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function ModalLayout({ children, onClose }: ModalWrapperProps) {
  return (
    <Overlay>
      <ModalContent>
        <ModalTitle />
        <CloseButton onClick={onClose}>
          <MdClose />
        </CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
`;

const ModalContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 800px;
    padding: 30px;
    max-width: 90%;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    background-color: ${theme.colors.black[800]};
  `}
`;

const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 30px;
    right: 30px;
    border: none;
    font-size: 24px;
    background: none;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.black[50]};
    }

    svg {
      fill: ${theme.colors.black[400]};
    }
  `}
`;
