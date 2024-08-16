import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { File } from '../../../types/file';
import { FaEllipsisH } from 'react-icons/fa';
import PdfIcon from 'components/common/button/PdfIcon';

interface FileListLayoutProps {
  files: File[];
  onRowClick: (file: File) => void;
  onMenuToggle: (event: React.MouseEvent, key: string) => void;
  menuState: { isOpen: boolean; selectedRowKey: string | null };
  renderActionMenu: (file: File) => JSX.Element;
}

export default function FileListLayout({
  files,
  onRowClick,
  onMenuToggle,
  menuState,
  renderActionMenu,
}: FileListLayoutProps) {
  return (
    <TableContainer>
      <TableHeader>
        <HeaderCell>이름</HeaderCell>
        <HeaderCell>열람 날짜</HeaderCell>
        <HeaderCell>파일 크기</HeaderCell>
        <HeaderCell>소유자</HeaderCell>
        <HeaderCell></HeaderCell>
        <HeaderCell></HeaderCell>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow
            key={file.id}
            onClick={() => onRowClick(file)}
            isMenuOpen={menuState.isOpen && menuState.selectedRowKey === file.id}>
            <TableCell>
              <PdfIcon width="26px" height="26px" />
              {file.name}
            </TableCell>
            <TableCell>{file.date}</TableCell>
            <TableCell>{file.size}</TableCell>
            <TableCell>{file.owner}</TableCell>
            <TableCell></TableCell>
            <TableCell onClick={(event) => onMenuToggle(event, file.id)}>
              <EllipsisContainer>
                <FaEllipsisH />
                {menuState.isOpen && menuState.selectedRowKey === file.id && renderActionMenu(file)}
              </EllipsisContainer>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
}

const EllipsisContainer = styled.div`
  position: relative;
`;

const TableContainer = styled.div`
  width: 100%;
  height: auto;
  border-spacing: 0;
  padding: 12px 20px 12px 8px;
`;

const TableHeader = styled.div`
  ${({ theme }) => css`
    position: sticky;
    display: grid;
    grid-template-columns: 10fr 2fr 2fr 2fr 2fr 2fr;
    ${theme.typography.body1M}
    color: ${theme.colors.black[500]};
  `}
`;

const TableBody = styled.div`
  display: grid;
  grid-template-columns: 10fr 2fr 2fr 2fr 2fr 2fr;
`;

const TableRow = styled.div<{ isMenuOpen: boolean }>`
  display: contents;

  &:hover {
    div {
      background-color: ${({ theme, isMenuOpen }) => !isMenuOpen && theme.colors.black[850]};
    }
  }

  &:active {
    div:not(.action-menu-item) {
      background: ${({ theme }) => theme.colors.key[800]};
    }
  }
`;

const HeaderCell = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 36px;
    margin-top: -10px;
    padding: 10px 16px;
    ${theme.typography.body1M}
    color: ${theme.colors.black[500]};
    border-bottom: 1px solid ${theme.colors.black[700]};
  `}
`;

const TableCell = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 17px;
    ${theme.typography.body2R}
    background-color: transparent;
    color: ${theme.colors.black[400]};
    border-bottom: 1px solid ${theme.colors.black[700]};
    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
      fill: ${theme.colors.black[500]};
    }
  `}
`;
