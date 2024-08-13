import { css } from '@emotion/react';
import styled from '@emotion/styled';

import ModalLayout from 'components/common/modal/ModalLayout';
import PdfIcon from 'components/common/button/PdfIcon';
import { FaExclamationTriangle } from 'react-icons/fa';

interface SecurityReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  accessRecords: Array<{
    userName: string;
    accessStatus: string;
    device: string;
    accessTime: string;
  }>;
}

export default function SecurityReportModal({ isOpen, onClose, fileName, accessRecords }: SecurityReportModalProps) {
  return (
    <>
      {isOpen && (
        <ModalLayout onClose={onClose}>
          <ModalHeader>
            <Title>개별 문서 보안리포트 확인</Title>
            <FileName>
              <PdfIcon marginRight="4px" />
              {fileName}
            </FileName>
          </ModalHeader>
          <TableHeader>
            <HeaderCell>열람기록</HeaderCell>
            <HeaderCell>접속 기기</HeaderCell>
            <HeaderCell>접속 시간</HeaderCell>
          </TableHeader>
          <ContentsBox>
            {accessRecords.map((record, index) => (
              <RecordItem key={index}>
                <RecordInfo>
                  <UserName>{record.userName}</UserName>
                  {record.accessStatus && (
                    <AccessStatus>
                      <FaExclamationTriangle />
                      {record.accessStatus}
                    </AccessStatus>
                  )}
                </RecordInfo>
                <DeviceInfo>{record.device}</DeviceInfo>
                <TimeInfo>{record.accessTime}</TimeInfo>
              </RecordItem>
            ))}
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

const TableHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid ${theme.colors.black[700]};
  `}
`;

const HeaderCell = styled.div`
  flex: 1;
  margin-left: 10px;
  ${({ theme }) => css`
    ${theme.typography.body2M};
    color: ${theme.colors.black[300]};
  `}

  &:first-of-type {
    flex: 2;
  }
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
`;

const RecordItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black[700]};
`;

const RecordInfo = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  gap: 20px;
`;

const UserName = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body2M};
    color: ${theme.colors.black[400]};
  `}
`;

const AccessStatus = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 2px 12px;
    background-color: ${theme.colors.black[600]};
    border-radius: 12px;
    ${theme.typography.body3R};
    color: ${theme.colors.black[100]};
  `}
  svg {
    margin-right: 4px;
    fill: #ff4975;
  }
`;

const DeviceInfo = styled.div`
  flex: 1;
  ${({ theme }) => css`
    ${theme.typography.body3M};
    color: ${theme.colors.black[400]};
    margin-left: 60px;
  `}
`;

const TimeInfo = styled.div`
  flex: 1;
  text-align: right;
  ${({ theme }) => css`
    ${theme.typography.body3M};
    color: ${theme.colors.black[400]};
  `}
`;
