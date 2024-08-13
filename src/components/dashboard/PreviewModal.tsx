import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ModalLayout from 'components/common/modal/ModalLayout';
import Spinner from 'components/common/spinner/Spinner';
import PdfIcon from 'components/common/button/PdfIcon';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
}

export default function PreviewModal({ isOpen, onClose, fileName }: PreviewModalProps) {
  if (!isOpen) return null;

  return (
    <ModalLayout onClose={onClose}>
      <FileName>
        <PdfIcon width="24px" height="24px" />
        {fileName}
      </FileName>
      <ContentsBox>
        <Spinner />
        <TextBox>잠시만 기다려주세요. 이 파일의 인증 절차를 확인하고 있어요.</TextBox>
      </ContentsBox>
    </ModalLayout>
  );
}

const FileName = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${theme.typography.body2M}
    color: ${theme.colors.black[400]}
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
    ${theme.typography.body2M}
    color: ${theme.colors.black[500]}
  `}
  margin-top: 20px;
`;
