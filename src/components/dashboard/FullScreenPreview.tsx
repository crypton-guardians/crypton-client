import { css } from '@emotion/react';
import styled from '@emotion/styled';
import DownloadButton from './DownloadButton';
import PdfIcon from 'components/common/button/PdfIcon';

interface FullScreenPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  fileDate: string;
  fileSize: string;
  fileOwner: string;
}

export default function FullScreenPreview({
  isOpen,
  onClose,
  fileName,
  fileDate,
  fileSize,
  fileOwner,
}: FullScreenPreviewProps) {
  if (!isOpen) return null;

  // NOTE: fileId를 주는 api가 없음, 임시데이터
  const fileId = 'example12345';

  return (
    <FullScreenOverlay onClick={onClose}>
      <PreviewHeader>
        <FileInfo>
          <PdfIcon width="24px" height="24px" />
          {fileName}
        </FileInfo>
        <AdditionalInfo>
          <span>{fileDate}</span>
          <span>{fileSize}</span>
          <span>{fileOwner}</span>
        </AdditionalInfo>
        <DownloadButton fileId={fileId} />
      </PreviewHeader>
      <PreviewContent>
        <TextBox>미리보기 화면</TextBox>
      </PreviewContent>
    </FullScreenOverlay>
  );
}

const FullScreenOverlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.85);
    z-index: 2000;
    ${theme.typography.body2M};
    color: ${theme.colors.black[200]};
  `}
`;

const PreviewHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 50px 80px 0px 80px;
`;

const FileInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    ${theme.typography.body2M};
    color: ${theme.colors.black[400]};
  `}
`;

const AdditionalInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 80px;
    margin-right: -50px;
    ${theme.typography.body2M};
    color: white;

    span,
    p {
      color: ${theme.colors.black[400]};
    }
  `}
`;

const PreviewContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 60%;
  background-color: white;
`;

const TextBox = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body2M};
    color: ${theme.colors.black[900]};
  `}
`;
