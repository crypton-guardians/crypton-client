import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { useEffect, useRef } from 'react';
import { BsDownload, BsFillPersonPlusFill } from 'react-icons/bs';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';

interface ActionMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onFilePreview: () => void;
  onShare: () => void;
  onSecurityReport: () => void;
}

export default function ActionMenuToggle({
  isOpen,
  onClose,
  onFilePreview,
  onShare,
  onSecurityReport,
}: ActionMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleDownload = (event: React.MouseEvent) => {
    event.stopPropagation();
    onFilePreview();
    onClose();
  };

  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <MenuContainer className="action-menu-item" ref={menuRef} onClick={handleMenuItemClick}>
      <MenuItem className="action-menu-item" onClick={handleDownload}>
        <BsDownload />
        파일 다운로드하기
      </MenuItem>
      <MenuItem className="action-menu-item" onClick={onShare}>
        <BsFillPersonPlusFill />
        다른 사람과 공유하기
      </MenuItem>
      <MenuItem className="action-menu-item" onClick={onSecurityReport}>
        <FaInfoCircle />
        개별 문서 보안리포트 확인
      </MenuItem>
      <MenuItem className="action-menu-item" onClick={handleMenuItemClick}>
        <FaTrashAlt />
        삭제하기
      </MenuItem>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 25px;
    right: 0;
    width: 280px;
    padding: 10px;
    border-radius: 8px;
    background-color: ${theme.colors.black[800]};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  `}
`;

const MenuItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 20px;
    ${theme.typography.body2M}
    color: ${theme.colors.black[400]};
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.black[700]};
    }

    svg {
      margin-right: 16px;
      fill: ${theme.colors.black[400]};
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.colors.black[700]};
    }
  `}

  &.action-menu-item {
  }
`;
