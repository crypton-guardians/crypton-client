import * as S from './LandingPage.styled';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <S.PageContainer>
        <S.Overlay>
          <S.Header>
            <S.Logo src="/logo-custom.png" alt="Logo" />
          </S.Header>
          <S.LandingContainer>
            <S.Title>
              Secure Document <br />
              Management System
            </S.Title>
            <S.SubTitle>로그인하고 보안 걱정없는 PDF 열람 서비스를 이용해 보세요.</S.SubTitle>
            <S.ButtonContainer>
              <S.SignupButton onClick={() => navigate('/signup')}>회원가입</S.SignupButton>
              <S.LoginButton onClick={() => navigate('/login')}>로그인</S.LoginButton>
            </S.ButtonContainer>
            <S.Footer>
              <S.FooterItem>©2024. Crypton. All rights reserved.</S.FooterItem>
              <S.FooterItem>Privacy Policy</S.FooterItem>
              <S.FooterItem>Terms of Service</S.FooterItem>
            </S.Footer>
          </S.LandingContainer>
        </S.Overlay>
      </S.PageContainer>
    </>
  );
}
