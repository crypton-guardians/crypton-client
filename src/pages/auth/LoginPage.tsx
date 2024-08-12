import { useState } from 'react';
import * as S from './Auth.styled';
import { useNavigate } from 'react-router-dom';
import { login } from 'services/auth/authApi';

export default function LoginPage() {
  const navigate = useNavigate();

  const [loginParams, setLoginParams] = useState({
    username:"",
    password:""
  })

  //로그인 핸들러
  const handleLogin = async () => {      
      try{
        const response = await login(loginParams);
        console.log("res :::", response)        
        if(response.status === 200){
          console.log("로그인 성공")
          navigate('/main')
        }
      }catch(error){
        console.log("error :::", error)
        if(error){
          setLoginParams({username:"", password:""})
          alert("아이디 및 패스워드가 틀렸습니다. 다시 로그인 해주세요.")          
        }
      }      
  }

  return (
    <S.PageContainer>
      <S.ContentsContainer>
        <S.Logo src="/logo-custom.png" alt="Logo" />
        <S.TextBox>로그인하고 보안 걱정 없는 PDF 열람 서비스를 이용해 보세요</S.TextBox>        
        <S.CustomInput 
        placeholder="이메일 또는 아이디를 입력해 주세요."
        onChange={(e)=>{
          setLoginParams({
            ...loginParams,
            "username":e.target.value,
          })
        }}
        value={loginParams && loginParams.username}
        />
        <S.CustomInput 
        placeholder="비밀번호를 입력해 주세요."
        type='password'
        onChange={(e)=>{
          setLoginParams({
            ...loginParams,
            "password":e.target.value,
          })
        }}
        value={loginParams && loginParams.password}
        />
        <S.AuthButton onClick={handleLogin}>로그인</S.AuthButton>
        <S.FooterBox>
          <S.TextBox>아직 크립톤 회원이 아니신가요?</S.TextBox>
          <S.LinkTextBox onClick={() => navigate('/signup')}>회원가입하기</S.LinkTextBox>
        </S.FooterBox>
      </S.ContentsContainer>
    </S.PageContainer>
  );
}
