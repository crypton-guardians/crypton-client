import * as S from './Auth.styled';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <S.PageContainer>
      <S.ContentsContainer>
        <S.Logo src="/logo-custom.png" alt="Logo" />
        <S.TextBox>회원가입하고 보안 걱정 없는 PDF 열람 서비스를 이용해 보세요</S.TextBox>
        <S.CustomInput placeholder="이메일 또는 아이디를 입력해 주세요." />
        <S.CustomInput placeholder="비밀번호를 입력해 주세요." />
        <S.AuthButton>회원가입</S.AuthButton>
        <S.FooterBox>
          <S.TextBox>이미 크립톤 회원이신가요?</S.TextBox>
          <S.LinkTextBox onClick={() => navigate('/login')}>로그인하기</S.LinkTextBox>
        </S.FooterBox>
      </S.ContentsContainer>
    </S.PageContainer>
  );
}
