import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { useState } from 'react';
import ModalLayout from 'components/common/modal/ModalLayout';
import PdfIcon from 'components/common/button/PdfIcon';
import { IoPersonCircleSharp } from 'react-icons/io5';

interface ShareManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  fileOwners: string[];
}

export default function ShareManagementModal({ isOpen, onClose, fileName, fileOwners }: ShareManagementModalProps) {
  const [shareInput, setShareInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShareInput(e.target.value);
  };

  return (
    <>
      {isOpen && (
        <ModalLayout onClose={onClose}>
          <ModalHeader>
            <Title>엑세스 · 공유 관리</Title>
            <FileName>
              <PdfIcon marginRight="4px" />
              {fileName}
            </FileName>
          </ModalHeader>
          <ContentsBox>
            <OwnerItemBox>
              {fileOwners.map((owner, index) => (
                <OwnerItem key={index}>
                  <IoPersonCircleSharp />
                  <OwnerName>{owner}</OwnerName>
                </OwnerItem>
              ))}
            </OwnerItemBox>
            <InputLabel>사용자 공유</InputLabel>
            <ShareInputBox>
              <InputField
                type="text"
                value={shareInput}
                onChange={handleInputChange}
                placeholder="공유할 사람의 크립톤 아이디를 입력해 주세요."
              />
              <ShareButton>전송하기</ShareButton>
            </ShareInputBox>
          </ContentsBox>
        </ModalLayout>
      )}
    </>
  );
}

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  ${({ theme }) => css`
    ${theme.typography.heading1};
    color: ${theme.colors.black[100]};
  `}
`;

const FileName = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 30px;
    ${theme.typography.body2M};
    color: ${theme.colors.black[400]};
  `}
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const OwnerItemBox = styled.div`
  padding: 0px 0px 20px 0px;
  /* overflow-y: scroll; */
`;

const OwnerItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0px;
    margin: 10px 0px;
    ${theme.typography.body2M};

    svg {
      fill: ${theme.colors.black[500]};
    }
  `}
`;

const OwnerName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black[400]};
  `}
`;

const ShareInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const InputLabel = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    margin-bottom: 8px;
    padding: 40px 0px 0px 4px;
    ${theme.typography.body2M};
    color: ${theme.colors.black[400]};
    border-top: 1px solid ${theme.colors.black[600]};
  `}
`;

const InputField = styled.input`
  ${({ theme }) => css`
    width: calc(100% - 120px);
    height: 50px;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    ${theme.typography.body2R};
    color: ${theme.colors.black[200]};
    background-color: ${theme.colors.black[850]};

    &::placeholder {
      ${theme.typography.body2R};
      color: ${theme.colors.black[500]};
    }

    &:focus {
      outline: none;
      border: solid 1px ${theme.colors.black[600]};
    }
  `}
`;

const ShareButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 45px;
    border: none;
    border-radius: 6px;
    color: ${theme.colors.key[100]};
    ${theme.typography.body2M}
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
