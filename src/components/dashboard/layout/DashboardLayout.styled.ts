// DashboardLayout.styled.ts
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 기본적인 레이아웃 스타일
export const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    background-color: ${theme.colors.black[900]};
  `}
`;

// 사이드바 스타일
export const Sidebar = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    width: 310px;
    padding: 20px;
    margin-top: 10px;
    background-color: ${theme.colors.black[900]};
  `}
`;

// 사이드바 탭 스타일
export const SidebarTab = styled.div<{ active?: boolean }>`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    height: 60px;
    padding: 10px 30px;
    border-radius: 50px 0px 0px 50px;
    ${theme.typography.body1M}
    color: ${active ? theme.colors.black[50] : theme.colors.black[500]};
    background: ${active ? theme.colors.gradient.keyGradient50 : 'transparent'};
    cursor: pointer;
    transition: all 0.3s ease;

    svg {
      margin-right: 16px;
      fill: ${active ? theme.colors.key[100] : theme.colors.black[500]};
    }

    &:hover {
      background-color: ${theme.colors.black[800]};
      color: ${theme.colors.black[50]};

      svg {
        fill: ${theme.colors.black[50]};
      }
    }
  `}
`;

// 헤더 스타일
export const Header = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(100% - 320px);
    height: 150px;
    padding: 20px;
    background-color: ${theme.colors.black[900]};
    z-index: 10; // 고정된 요소 중 가장 위에 위치하도록 설정
  `}
`;

// 보안탈취 의심 안내 영역 스타일
export const WarningInfo = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: 120px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 40px 30px 20px 50px;
    background-color: ${theme.colors.black[900]};
    z-index: 9; // Header 아래, 다른 스크롤 요소 위에 위치하도록 설정

    svg {
      margin-right: 12px;
      fill: #ff4975;
    }

    .warning-title {
      display: flex;
      align-items: center;
      ${theme.typography.heading1};
      color: ${theme.colors.black[300]};
      margin-bottom: 12px;
    }

    .warning-description {
      ${theme.typography.body2R};
      color: ${theme.colors.black[500]};
      margin-left: 36px;
    }
  `}
`;

// 최근 본 파일 목록 (기본 4개 렌더링))
export const RecentFilesSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  z-index: 8; // WarningInfo 아래에 위치하도록 설정
`;

// 컨텐츠 영역 스타일
export const Content = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    padding: 140px 20px 10px 20px;
    background-color: ${theme.colors.black[900]};
  `}
`;

export const TabContent = styled.div`
  ${({ theme }) => css`
    position: sticky;
    top: 220px;
    height: 60px;
    padding: 20px;
    ${theme.typography.heading1};
    color: ${theme.colors.black[300]};
    background-color: ${theme.colors.black[900]};
    z-index: 7;
  `}
`;

export const MainContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export const TableContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black[900]};
    overflow-y: auto;
  `}
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin: 10px 20px 35px 20px;
`;
