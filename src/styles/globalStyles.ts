/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyles = css`
  ${emotionReset};

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/PretendardVariable.woff2') format('woff2');
    font-weight: 100 900;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #323232;
  }

  html {
    font-size: 62.5%; /* 1 rem = 10px */
    font-family: 'Pretendard', sans-serif;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  input,
  button,
  textarea {
    font-family: 'Pretendard', sans-serif;
  }

  textarea {
    resize: none;
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default globalStyles;
