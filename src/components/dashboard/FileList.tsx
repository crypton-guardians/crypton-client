import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Table } from 'antd';
import { FaEllipsisH } from 'react-icons/fa';

interface FileData {
  key: string;
  name: string;
  date: string;
  size: string;
  owner: string;
}

const dataSource: FileData[] = [
  {
    key: '1',
    name: '포트폴리오',
    date: '24.08.07',
    size: '153mb',
    owner: 'user123',
  },
  // 다른 파일 데이터 추가...
];

const columns = [
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <TbPdf style={{ marginRight: '8px', fill: '#E8E8FF' }} /> */}
        <PdfIcon src="/pdf-icon.png" alt="pdf" />
        {text}
      </div>
    ),
  },
  {
    title: '열람 날짜',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '파일 크기',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: '소유자',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: '',
    key: 'action',
    render: () => (
      <div style={{ textAlign: 'right' }}>
        <FaEllipsisH />
      </div>
    ),
  },
];

const CustomTable = styled(Table)<{ theme?: Theme }>`
  .ant-table-thead > tr > th {
    background: ${({ theme }) => theme.colors.black[800]};
    color: ${({ theme }) => theme.colors.black[300]};
    font-weight: bold;
    text-align: left;
  }

  .ant-table-tbody > tr > td {
    background: ${({ theme }) => theme.colors.black[900]};
    color: ${({ theme }) => theme.colors.black[100]};
  }

  .ant-table-tbody > tr:hover > td {
    background: ${({ theme }) => theme.colors.black[800]};
  }

  .ant-table-thead > tr > th:first-of-type,
  .ant-table-tbody > tr > td:first-of-type {
    padding-left: 16px;
  }

  .ant-table-thead > tr > th:last-of-type,
  .ant-table-tbody > tr > td:last-of-type {
    padding-right: 16px;
  }
`;

export default function FileList() {
  return <CustomTable columns={columns} dataSource={dataSource} pagination={false} />;
}

const PdfIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  background-size: cover;
`;
