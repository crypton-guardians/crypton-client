import styled from '@emotion/styled';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-position: center;
  background-size: cover;
  background-image: url('./background.webp');
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
  margin: 26px;
`;

export const TextBox = styled.div`
  color: white;
  font-size: 18px;
  margin-bottom: 26px;
`;

export const LinkTextBox = styled.div`
  color: #312dff;
  font-size: 18px;
  font-weight: 600;
  margin: 0px 0px 26px 16px;
  cursor: pointer;
`;

export const CustomInput = styled.input`
  width: 80%;
  height: 54px;
  font-size: 16px;
  font-weight: 500;
  padding: 0 10px;
  margin-bottom: 16px;
  color: #9d9fa1;
  border-radius: 10px;
  border: 1px solid #9d9fa1;
  background: transparent;
  box-sizing: border-box;

  &::placeholder {
    color: #9d9fa1;
  }

  &:focus {
    outline: none;
    border-color: #f2f2f2;
  }
`;

export const AuthButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 54px;
  margin-top: 10px;
  color: black;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  background-color: #f2f2f2;
  box-sizing: border-box;
`;

export const FooterBox = styled.div`
  display: flex;
  margin: 26px;
`;
