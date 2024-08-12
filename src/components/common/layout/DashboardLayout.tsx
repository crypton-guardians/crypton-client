import * as S from './DashboardLayout.styled';
import { useState } from 'react';
import SearchInput from '../input/SearchInput';
import UploadButton from '../button/UploadButton';
import { AiFillHome } from 'react-icons/ai';
import { FaFolderOpen, FaTrashAlt } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <S.TabContent>홈 내용</S.TabContent>;
      case 'myFiles':
        return <S.TabContent>내 파일 내용</S.TabContent>;
      case 'sharedFiles':
        return <S.TabContent>공유된 파일 내용</S.TabContent>;
      case 'trash':
        return <S.TabContent>휴지통 내용</S.TabContent>;
      default:
        return <S.TabContent>홈 내용</S.TabContent>;
    }
  };

  return (
    <S.Layout>
      <S.Sidebar>
        <S.Logo src="/logo-custom.png" alt="Logo" />
        <S.SidebarTab active={activeTab === 'home'} onClick={() => setActiveTab('home')}>
          <AiFillHome />홈
        </S.SidebarTab>
        <S.SidebarTab active={activeTab === 'myFiles'} onClick={() => setActiveTab('myFiles')}>
          <FaFolderOpen />내 파일
        </S.SidebarTab>
        <S.SidebarTab active={activeTab === 'sharedFiles'} onClick={() => setActiveTab('sharedFiles')}>
          <BsFillPeopleFill />
          공유된 파일
        </S.SidebarTab>
        <S.SidebarTab active={activeTab === 'trash'} onClick={() => setActiveTab('trash')}>
          <FaTrashAlt />
          휴지통
        </S.SidebarTab>
      </S.Sidebar>
      <div style={{ flexGrow: 1 }}>
        <S.Header>
          <SearchInput placeholder="검색어를 입력하세요." />
          <UploadButton />
        </S.Header>
        <S.Content>{renderContent()}</S.Content>
      </div>
    </S.Layout>
  );
}
