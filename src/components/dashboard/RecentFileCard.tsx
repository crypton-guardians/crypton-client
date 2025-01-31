import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PdfIcon from 'components/common/button/PdfIcon';

interface FileCardProps {
  title: string;
  preview: string;
}

export default function FileCard({ title, preview }: FileCardProps) {
  return (
    <CardContainer>
      <FileHeader>
        <PdfIcon marginRight="12px" />
        <FileTitle>{title}</FileTitle>
      </FileHeader>
      <FilePreview src={preview} alt={title} />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(25% - 18px);
    height: auto;
    padding: 18px;
    border-radius: 12px;
    color: ${theme.colors.black[300]};
    background-color: ${theme.colors.black[850]};
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.black[800]};
    }
  `}
`;

const FileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const FileTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    ${theme.typography.body2R}
    color: ${theme.colors.black[300]};
  `}
`;

const FilePreview = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
  background-size: cover;
`;
