import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { dataSource } from './FileListdataSource';
import { FaEllipsisH } from 'react-icons/fa';

export default function FileList() {
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
        {dataSource.map((file) => (
          <TableRow key={file.key}>
            <TableCell>
              <PdfIcon src="/pdf-icon.png" alt="pdf" />
              {file.name}
            </TableCell>
            <TableCell>{file.date}</TableCell>
            <TableCell>{file.size}</TableCell>
            <TableCell>{file.owner}</TableCell>
            <TableCell></TableCell>
            <TableCell>
              <FaEllipsisH />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
}

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

const TableRow = styled.div`
  display: contents;

  &:hover {
    div {
      background-color: ${({ theme }) => theme.colors.black[850]};
    }
  }

  &:active {
    div {
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

const PdfIcon = styled.img`
  width: 26px;
  height: 26px;
  margin-right: 16px;
  background-size: cover;
`;
