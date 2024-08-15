import apiClient from 'services/apiClient';
import { useState, useReducer, useEffect } from 'react';
import { FileResponse } from 'services/file/types';
import { File } from '../../../types/file';
import { formatDateToYYMMDD } from 'utils/dateUtils';
import ActionMenuToggle from '../ActionMenuToggle';
import FileListLayout from './FileListLayout';
import PreviewInfoModal from '../PreviewInfoModal';
import FullScreenPreview from '../FullScreenPreview';
import ShareManagementModal from '../ShareManagementModal';
import SecurityReportModal from '../SecurityReportModal';
import FileDeleteConfirmModal from '../FileDeleteConfirmModal';

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

export default function MyFileList() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showPreviewInfoModal, setShowPreviewInfoModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSecurityReportModal, setShowSecurityReportModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const [fileList, setFileList] = useState<File[]>([]);
  const [menuState, dispatchMenu] = useReducer(menuReducer, { isOpen: false, selectedRowKey: null });

  const fetchFileList = async () => {
    try {
      const userId = sessionStorage.getItem('userId');
      if (!userId) throw new Error('사용자 ID를 찾을 수 없습니다.');

      const response = await apiClient.get(`/document/list`, { params: { userId } });

      if (response.data.success) {
        const formattedFiles = response.data.data.map(
          (file: FileResponse): File => ({
            id: file.documentId,
            name: file.fileName,
            date: formatDateToYYMMDD(file.createdAt),
            size: file.fileSize,
            owner: file.uploadUser,
          }),
        );
        setFileList(formattedFiles);
      } else {
        console.error('파일 리스트를 가져오는데 실패했습니다:', response.data.message);
      }
    } catch (error) {
      console.error('파일 리스트를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
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

  const handleDeleteOpen = (file: File) => {
    setSelectedFile(file);
    setShowDeleteConfirmModal(true);
    handleMenuClose();
  };

  const handleDeleteClose = () => {
    setShowDeleteConfirmModal(false);
  };

  const handleDeleteSuccess = () => {
    setShowDeleteConfirmModal(false);
    fetchFileList(); // 파일 리스트 갱신
  };

  const renderActionMenu = (file: File) => (
    <ActionMenuToggle
      isOpen={menuState.isOpen && menuState.selectedRowKey === file.id}
      onClose={handleMenuClose}
      onFilePreview={() => handleFilePreview(file)}
      onShare={() => handleShareOpen(file)}
      onSecurityReport={() => handleSecurityReportOpen(file)}
      onDelete={() => handleDeleteOpen(file)}
    />
  );

  return (
    <>
      <FileListLayout
        files={fileList}
        onRowClick={handleRowClick}
        onMenuToggle={handleMenuToggle}
        menuState={menuState}
        renderActionMenu={renderActionMenu}
      />

      {selectedFile && showPreviewInfoModal && (
        <PreviewInfoModal
          isOpen={showPreviewInfoModal}
          onClose={handleClosePreviewInfoModal}
          fileName={selectedFile.name}
          fileDate={selectedFile.date}
          fileSize={selectedFile.size}
          fileOwner={selectedFile.owner}
          onPreviewStart={handlePreviewStart}
          fileId={selectedFile.id}
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
          fileId={selectedFile.id}
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
          fileId={selectedFile.id}
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

      {selectedFile && showDeleteConfirmModal && (
        <FileDeleteConfirmModal
          isOpen={showDeleteConfirmModal}
          onClose={handleDeleteClose}
          fileName={selectedFile.name}
          fileId={selectedFile.id}
          onDeleteSuccess={handleDeleteSuccess}
        />
      )}
    </>
  );
}
