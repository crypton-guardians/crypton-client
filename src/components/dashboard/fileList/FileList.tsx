import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useState, useReducer, useEffect } from 'react';
import apiClient from 'services/apiClient';
import { FaEllipsisH } from 'react-icons/fa';
import PreviewInfoModal from '../PreviewInfoModal';
import FullScreenPreview from '../FullScreenPreview';
import ShareManagementModal from '../ShareManagementModal';
import SecurityReportModal from '../SecurityReportModal';
import ActionMenuToggle from '../ActionMenuToggle';
import PdfIcon from 'components/common/button/PdfIcon';

interface File {
  key: string;
  name: string;
  date: string;
  size: string;
  owner: string;
}

interface MenuState {
  isOpen: boolean;
  selectedRowKey: string | null;
}

type MenuAction = { type: 'TOGGLE'; key: string } | { type: 'CLOSE' };

function menuReducer(state: MenuState, action: MenuAction): MenuState {
  switch (action.type) {
    case 'TOGGLE':
      return { isOpen: !state.isOpen, selectedRowKey: action.key };
    case 'CLOSE':
      return { isOpen: false, selectedRowKey: null };
    default:
      return state;
  }
}

export default function FileList() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showPreviewInfoModal, setShowPreviewInfoModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSecurityReportModal, setShowSecurityReportModal] = useState(false);

  const [fileList, setFileList] = useState<File[]>([]);

  // 메뉴 상태 관리
  const [menuState, dispatchMenu] = useReducer(menuReducer, { isOpen: false, selectedRowKey: null });

  useEffect(() => {
    const fetchFileList = async () => {
      try {
        const userId = sessionStorage.getItem('userId');
        if (!userId) {
          throw new Error('사용자 ID를 찾을 수 없습니다.');
        }

        const response = await apiClient.get(`/document/list`, {
          params: { userId },
        });

        if (response.data.success) {
          const formattedFiles = response.data.data.map((file: any, index: number) => ({
            key: String(index), // 임시로 key 생성
            name: file.fileName,
            date: file.createdAt,
            size: file.fileSize,
            owner: file.uploadUser,
          }));
          setFileList(formattedFiles);
        } else {
          console.error('파일 리스트를 가져오는데 실패했습니다:', response.data.message);
        }
      } catch (error) {
        console.error('파일 리스트를 가져오는 중 오류 발생:', error);
      }
    };

    fetchFileList();
  }, []);

  const handleRowClick = (file: File) => {
    if (!menuState.isOpen) {
      setSelectedFile(file);
      setShowPreviewInfoModal(true);
    }
  };

  const handleMenuToggle = (event: React.MouseEvent, key: string) => {
    event.stopPropagation();
    dispatchMenu({ type: 'TOGGLE', key });
  };

  const handleMenuClose = () => {
    dispatchMenu({ type: 'CLOSE' });
  };

  const handleClosePreviewInfoModal = () => {
    setShowPreviewInfoModal(false);
  };

  const handleFilePreview = (file: File) => {
    setSelectedFile(file);
    setShowPreviewInfoModal(true);
  };

  const handlePreviewStart = () => {
    setShowPreview(true);
    setShowPreviewInfoModal(false);
  };

  const handleFullScreenClose = () => {
    setSelectedFile(null);
    setShowPreview(false);
  };

  const handleShareOpen = (file: File) => {
    setSelectedFile(file);
    setShowShareModal(true);
    handleMenuClose();
  };

  const handleShareClose = () => {
    setShowShareModal(false);
  };

  const handleSecurityReportOpen = (file: File) => {
    setSelectedFile(file);
    setShowSecurityReportModal(true);
    handleMenuClose();
  };

  const handleSecurityReportClose = () => {
    setShowSecurityReportModal(false);
  };

  return (
    <>
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
          {fileList.map((file) => (
            <TableRow
              key={file.key}
              onClick={() => handleRowClick(file)}
              isMenuOpen={menuState.isOpen && menuState.selectedRowKey === file.key}>
              <TableCell>
                <PdfIcon width="26px" height="26px" />
                {file.name}
              </TableCell>
              <TableCell>{file.date}</TableCell>
              <TableCell>{file.size}</TableCell>
              <TableCell>{file.owner}</TableCell>
              <TableCell></TableCell>
              <TableCell onClick={(event) => handleMenuToggle(event, file.key)}>
                <EllipsisContainer>
                  <FaEllipsisH />
                  {menuState.isOpen && menuState.selectedRowKey === file.key && (
                    <ActionMenuToggle
                      isOpen={menuState.isOpen}
                      onClose={handleMenuClose}
                      onFilePreview={() => handleFilePreview(file)}
                      onShare={() => handleShareOpen(file)}
                      onSecurityReport={() => handleSecurityReportOpen(file)}
                    />
                  )}
                </EllipsisContainer>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>

      {selectedFile && showPreviewInfoModal && (
        <PreviewInfoModal
          isOpen={showPreviewInfoModal}
          onClose={handleClosePreviewInfoModal}
          fileName={selectedFile.name}
          fileDate={selectedFile.date}
          fileSize={selectedFile.size}
          fileOwner={selectedFile.owner}
          onPreviewStart={handlePreviewStart}
        />
      )}

      {showPreview && selectedFile && (
        <FullScreenPreview
          isOpen={showPreview}
          onClose={handleFullScreenClose}
          fileName={selectedFile.name}
          fileDate={selectedFile.date}
          fileSize={selectedFile.size}
          fileOwner={selectedFile.owner}
        />
      )}

      {showShareModal && selectedFile && (
        <ShareManagementModal
          isOpen={showShareModal}
          onClose={handleShareClose}
          fileName={selectedFile.name}
          fileOwners={['User 123', 'User 12323']} // NOTE: 파일 소유자 리스트 (임시 데이터)
        />
      )}

      {showSecurityReportModal && selectedFile && (
        <SecurityReportModal
          isOpen={showSecurityReportModal}
          onClose={handleSecurityReportClose}
          fileName={selectedFile.name}
          fileId={selectedFile.key}
          accessRecords={[
            {
              userName: 'qwer12341',
              accessStatus: '허용되지 않은 사용자',
              device: 'Mac OS',
              accessTime: '2024-08-12 15:30:45',
            },
            {
              userName: 'user868',
              accessStatus: '',
              device: 'Mac OS',
              accessTime: '2024-08-12 15:30:45',
            },
            {
              userName: 'user19999',
              accessStatus: '허용되지 않은 사용자',
              device: 'Android',
              accessTime: '2024-08-12 15:30:45',
            },
          ]} // NOTE: 임시 데이터입니다.
        />
      )}
    </>
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
