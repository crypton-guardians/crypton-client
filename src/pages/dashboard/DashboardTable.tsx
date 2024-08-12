import React from 'react';
import { Table } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  date: string;
  size: string;
  owner: string;
}

const columns = [
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '업로드 날짜',
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
];

// const dataSource: DataType[] = [];

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'Sample PDF 1',
    date: '2024-08-01',
    size: '153MB',
    owner: 'user123',
  },
  {
    key: '2',
    name: 'Sample PDF 2',
    date: '2024-08-02',
    size: '120MB',
    owner: 'user456',
  },
];

const Dashboard = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default Dashboard;
