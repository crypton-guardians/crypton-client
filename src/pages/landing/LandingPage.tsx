import React from 'react';
import CustomButton from 'components/common/button/CustomButton';
import * as S from './LandingPage.styled';

export default function LandingPage() {
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
          <CustomButton variant="outline" width="320px" height="64px" textColor="#000">
            Sign Up
          </CustomButton>
          <CustomButton variant="default" width="320px" height="64px" textColor="#fff">
            Login
          </CustomButton>
        </S.ButtonContainer>
      </S.LandingContainer>
    </>
  );
}
