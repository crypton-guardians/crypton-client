import { useState, useReducer, useEffect } from 'react';
import ActionMenuToggle from '../ActionMenuToggle';
import FileListLayout from './FileListLayout';
import PreviewInfoModal from '../PreviewInfoModal';
import FullScreenPreview from '../FullScreenPreview';
import ShareManagementModal from '../ShareManagementModal';
import SecurityReportModal from '../SecurityReportModal';
import FileDeleteConfirmModal from '../FileDeleteConfirmModal';
import { dataSource, FileData } from './FileListdataSource'; // 테스트 데이터

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

interface File {
  id: string;
  name: string;
  date: string;
  size: string;
  owner: string;
}

export default function MyFileList() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showPreviewInfoModal, setShowPreviewInfoModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSecurityReportModal, setShowSecurityReportModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

  const [fileList, setFileList] = useState<File[]>([]); // File 타입으로 설정
  const [menuState, dispatchMenu] = useReducer(menuReducer, { isOpen: false, selectedRowKey: null });

  // FileData를 File 타입으로 변환
  const fetchFileList = () => {
    const convertedFiles: File[] = dataSource.map((file: FileData) => ({
      id: file.key, // key를 id로 변환
      name: file.name,
      date: file.date,
      size: file.size,
      owner: file.owner,
    }));
    setFileList(convertedFiles);
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
          fileId={''}
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
          fileId={''}
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
          fileId={''}
          isOpen={showSecurityReportModal}
          onClose={handleSecurityReportClose}
          fileName={selectedFile.name}
          accessRecords={[]}
        />
      )}

      {selectedFile && showDeleteConfirmModal && (
        <FileDeleteConfirmModal
          fileId={''}
          isOpen={showDeleteConfirmModal}
          onClose={handleDeleteClose}
          fileName={selectedFile.name}
          onDeleteSuccess={handleDeleteSuccess}
        />
      )}
    </>
  );
}
