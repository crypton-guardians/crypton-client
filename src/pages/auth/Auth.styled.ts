import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-position: center;
  background-size: cover;
  background-image: url('/images/background.webp');
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 720px;
  height: 550px;
  padding: 20px;
  border-radius: 75px;
  background: rgba(0, 0, 0, 0.6);
`;

export const Logo = styled.img`
  width: 170px;
  height: auto;
  margin: 30px;
`;

export const TextBox = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body1M}
  `}
  color: white;
  margin-bottom: 26px;
`;

export const LinkTextBox = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body1B}
    color: ${theme.colors.key[400]};
  `}
  margin: 0px 0px 26px 16px;
  cursor: pointer;
`;

export const CustomInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black[500]};
    border: 1.3px solid ${theme.colors.black[500]};
    ${theme.typography.loginInput}

    &::placeholder {
      color: ${theme.colors.black[500]};
    }

    &:focus {
      border-color: ${theme.colors.black[200]};
    }
  `}

  width: 80%;
  height: 54px;
  padding: 0 10px;
  margin-bottom: 16px;
  border-radius: 10px;
  background: transparent;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const AuthButton = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black[100]};
    ${theme.typography.body1S}
    &:hover {
      background-color: ${theme.colors.black[300]};
    }
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 54px;
  margin-top: 10px;
  color: black;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const FooterBox = styled.div`
  display: flex;
  margin: 26px;
`;
