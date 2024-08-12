import styled from '@emotion/styled';
import { css } from '@emotion/react';

// 기본적인 레이아웃 스타일
export const Layout = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    background-color: ${theme.colors.black[900]}; // theme을 사용하여 색상을 적용
  `}
`;

// 사이드바 스타일
export const Sidebar = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    padding: 20px;
    margin-top: 10px;
    background-color: ${theme.colors.black[900]}; // theme을 사용하여 색상을 적용
  `}
`;

// 사이드바 탭 스타일
export const SidebarTab = styled.div<{ active?: boolean }>`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    height: 67px;
    padding: 10px 30px;
    border-radius: 50px 0px 0px 50px;
    ${theme.typography.body1M}
    color: ${active ? theme.colors.black[50] : theme.colors.black[500]};
    background: ${active ? theme.colors.gradient.keyGradient50 : 'transparent'};
    cursor: pointer;

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
    width: calc(100% - 330px);
    height: 80px;
    background-color: ${theme.colors.black[900]};
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    right: 0;
    margin: 45px 20px 30px 20px;
    padding: 20px;
    z-index: 1;
  `}
`;

// 컨텐츠 영역 스타일
export const Content = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    padding: 150px 20px 20px 20px;
    overflow-y: auto;
    background-color: ${theme.colors.black[900]};
  `}
`;

export const TabContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black[900]};
    ${theme.typography.body1M}
    padding: 20px;
    border-radius: 10px;
    color: white;
  `}
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin: 10px 20px 35px 20px;
`;
