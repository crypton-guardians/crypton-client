import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { deleteFile } from 'services/file/fileApi';
import ModalLayout from 'components/common/modal/ModalLayout';
import PdfIcon from 'components/common/button/PdfIcon';

interface FileDeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  fileId: string;
  onDeleteSuccess: () => void;
}

export default function FileDeleteConfirmModal({
  isOpen,
  onClose,
  fileName,
  fileId,
  onDeleteSuccess,
}: FileDeleteConfirmModalProps) {
  const handleDelete = async () => {
    try {
      const response = await deleteFile(fileId);
      if (response.success) {
        console.log('파일 삭제 성공:', response.message);
        onDeleteSuccess();
        onClose();
      } else {
        console.error('파일 삭제 실패:', response.message);
      }
    } catch (error) {
      console.error('파일 삭제 중 오류 발생:', error);
    }
  };

  return (
    <>
      {isOpen && (
        <ModalLayout onClose={onClose}>
          <FileName>
            <PdfIcon width="24px" height="24px" />
            {fileName}
          </FileName>
          <ContentsBox>
            <TextBox>이 항목을 휴지통으로 보내시겠습니까?</TextBox>
          </ContentsBox>
          <ButtonBox>
            <DeleteButton onClick={handleDelete}>삭제하기</DeleteButton>
            <BackButton onClick={onClose}>취소</BackButton>
          </ButtonBox>
        </ModalLayout>
      )}
    </>
  );
}

const FileName = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${theme.typography.body2M};
    color: ${theme.colors.black[400]};
  `}
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 50px 40px;
`;

const TextBox = styled.div`
  ${({ theme }) => css`
    margin: 15px 0px 15px 0px;
    ${theme.typography.body1M}
    color: ${theme.colors.black[300]};
  `}
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
`;

const DeleteButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 45px;
    margin: 10px 5px 5px 5px;
    border: none;
    border-radius: 6px;
    color: ${theme.colors.key[100]};
    ${theme.typography.body2M}
    transition: background-color 0.5s ease;
    background: ${theme.colors.gradient.keyGradient};
    cursor: pointer;

    &:hover {
      background: ${theme.colors.gradient.keyGradientHover};
    }
  `}
`;

const BackButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 45px;
    margin: 10px 5px 5px 10px;
    border-radius: 6px;
    ${theme.typography.body2M}
    border: solid 1px ${theme.colors.key[100]};
    color: ${theme.colors.key[100]};
    transition: background-color 0.5s ease;
    background: transparent;
    cursor: pointer;
  `}
`;
