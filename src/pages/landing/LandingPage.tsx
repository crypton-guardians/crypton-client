import * as S from './LandingPage.styled';
import { useNavigate } from 'react-router-dom';
import CustomButton from 'components/common/button/CustomButton';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <S.Header>
        <S.Logo src="/logo.png" alt="Logo" />
      </S.Header>
      <S.LandingContainer>
        <S.Title>
          Secure Document <br />
          Management System
        </S.Title>
        <S.SubTitle>Upload, manage, and share your documents securely</S.SubTitle>
        <S.ButtonContainer>
          <CustomButton
            variant="outline"
            width="320px"
            height="64px"
            textColor="#000"
            onClick={() => navigate('/signup')}>
            Sign Up
          </CustomButton>
          <CustomButton
            variant="default"
            width="320px"
            height="64px"
            textColor="#fff"
            onClick={() => navigate('/login')}>
            Login
          </CustomButton>
        </S.ButtonContainer>
        <S.Footer>
          <S.FooterItem>©2024. Crypton. All rights reserved.</S.FooterItem>
          <S.FooterItem>Privacy Policy</S.FooterItem>
          <S.FooterItem>Terms of Service</S.FooterItem>
        </S.Footer>
      </S.LandingContainer>
    </>
  );
}
