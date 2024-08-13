import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import ModalLayout from 'components/common/modal/ModalLayout';
import Spinner from 'components/common/spinner/Spinner';
import PdfIcon from 'components/common/button/PdfIcon';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
}

export default function PreviewModal({ isOpen, onClose, fileName }: PreviewModalProps) {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowAdditionalContent(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalLayout onClose={onClose}>
      <FileName>
        <PdfIcon width="24px" height="24px" />
        {fileName}
      </FileName>
      <ContentsBox>
        {showAdditionalContent ? (
          <>
            <Spinner />
            <TextBox>잠시 후 미리 보기 페이지로 넘어갑니다.</TextBox>
            <NewContentBox>
              <InfoBox>
                <TextBox>이 파일에 엑세스 허용됨</TextBox>
                <TextBox>User 001 님은 이 문서를 15회 열람하였습니다.</TextBox>
              </InfoBox>
              <InfoBox>
                <TextBox>최근 허용되지 않은 접근</TextBox>
                <TextBox>불법 탈취 의심되는 접근이 없습니다.</TextBox>
              </InfoBox>
            </NewContentBox>
          </>
        ) : (
          <>
            <Spinner />
            <TextBox>잠시만 기다려주세요. 이 파일의 인증 절차를 확인하고 있어요.</TextBox>
          </>
        )}
      </ContentsBox>
    </ModalLayout>
  );
}

const FileName = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${theme.typography.body2M};
    color: ${theme.colors.black[400]};
  `}
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
`;

const TextBox = styled.div`
  ${({ theme }) => css`
    margin: 15px 0px 15px 0px;
    ${theme.typography.body2M}
    color: ${theme.colors.black[500]};
  `}
`;

const NewContentBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px -60px 0px;
    ${theme.typography.body2M};
  `}
`;

const InfoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 140px;
    margin: 10px;
    padding: 15px 0px 15px 0px;
    border-radius: 20px;
    background-color: ${theme.colors.black[850]};
  `}
`;
