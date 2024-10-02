import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url('/images/background.webp');
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 95vh;
`;

export const Header = styled.header`
  position: absolute;
  top: 80px;
  left: 100px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Logo = styled.img`
  width: 170px;
  height: auto;
`;

export const Title = styled.div`
  padding: 20px;
  font-size: 60px;
  font-weight: 700;
  line-height: 64px;
  color: white;
`;

export const SubTitle = styled.div`
  ${({ theme }) => css`
    margin: 30px 0px 42px 0px;
    ${theme.typography.body1M};
    color: ${theme.colors.black[100]};
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const SignupButton = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body1S};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 64px;
    margin: 10px;
    border-radius: 10px;
    border: 1.5px solid white;
    background-color: transparent;
    color: white;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `}
`;

export const LoginButton = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body1S};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 64px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    background-color: white;
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${theme.colors.black[200]};
    }
  `}
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 800px;
`;

export const FooterItem = styled.div`
  ${({ theme }) => css`
    padding: 30px;
    ${theme.typography.body3M};
    color: ${theme.colors.black[400]};
  `}
`;
