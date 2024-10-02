import * as S from './DashboardPage.styled';
import { useState } from 'react';
import SearchInput from 'components/dashboard/SearchInput';
import UploadButton from 'components/dashboard/UploadButton';
import RecentFileCard from 'components/dashboard/RecentFileCard';
import MyFileList from 'components/dashboard/fileList/MyFileList';
import { AiFillHome } from 'react-icons/ai';
import { FaFolderOpen, FaTrashAlt } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoIosWarning } from 'react-icons/io';

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          // NOTE: 임시데이터, API 연동 예정
          <>
            <S.WarningInfo>
              <div className="warning-title">
                <IoIosWarning size={24} />
                최근 발생한 보안 탈취 의심건 : 4건
              </div>
              <div className="warning-description">
                허용되지 않은 접근이 있는 파일을 클릭하여 상세정보를 확인해보세요.
              </div>
            </S.WarningInfo>
            <S.RecentFilesSection>
              <RecentFileCard title="챌린지 모집공고" preview="/images/sample1.png" />
              <RecentFileCard title="AI 서비스 정보 구조도" preview="/images/sample2.png" />
              <RecentFileCard title="7-8시즌 현황 공개" preview="/images/sample3.png" />
              <RecentFileCard title="7-8시즌 현황 공개" preview="/images/sample3.png" />
            </S.RecentFilesSection>
            <S.TabContent>파일 목록</S.TabContent>
            <S.TableContainer>
              <MyFileList />
            </S.TableContainer>
          </>
        );
      case 'myFiles':
        return (
          <>
            <S.TabContent>파일 목록</S.TabContent>
            <S.TableContainer>
              <MyFileList />
            </S.TableContainer>
          </>
        );
      case 'sharedFiles':
        return <S.TabContent>공유된 파일 내용</S.TabContent>;
      case 'trash':
        return <S.TabContent>휴지통 내용</S.TabContent>;
      default:
        return <S.TabContent>홈 내용</S.TabContent>;
    }
  };

  return (
    <S.DashboadrLayout>
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
      <S.MainContainer>
        <S.Header>
          <SearchInput placeholder="검색어를 입력하세요." />
          <UploadButton />
        </S.Header>
        <S.Content>{renderContent()}</S.Content>
      </S.MainContainer>
    </S.DashboadrLayout>
  );
}
