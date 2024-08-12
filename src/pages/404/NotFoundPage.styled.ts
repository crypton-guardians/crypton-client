import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const NotFoundContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.black[900]};
  `}
`;

export const Title = styled.div`
  padding: 0px 10px 10px 10px;
  font-size: 72px;
  font-weight: 700;
  line-height: 87px;
  color: white;
`;

export const SubTitle = styled.div`
  margin: 20px 0px 50px 0px;
  font-size: 24px;
  font-weight: 500;
  color: white;
`;

export const HomeButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 50px;
    border: none;
    border-radius: 60px;
    color: white;
    ${theme.typography.body1M}
    transition: background-color 0.5s ease;
    background: ${theme.colors.gradient.keyGradient};
    cursor: pointer;

    &:hover {
      background: ${theme.colors.gradient.keyGradientHover};
    }
  `}
`;
