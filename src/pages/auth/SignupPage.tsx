import { useState } from 'react';
import * as S from './Auth.styled';
import { useNavigate } from 'react-router-dom';
import { checkDuplicateUser, signup } from 'services/auth/authApi';

export default function SignupPage() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    username:"",
    password:""
  })

  const handleSignup = async () => {
    try{
      //아이디 중복체크
      if(userInfo){
        const response = await checkDuplicateUser(userInfo.username)        
        if(response.data.data){
          alert("아이디가 중복입니다. 다시 입력해주세요.")
          setUserInfo({username:"", password:""})
        }else{          
          const response = await signup(userInfo);          
          if(response.status === 200){            
            alert("회원가입 성공!")
            navigate('/dashboard')
          }else{
            setUserInfo({username:"", password:""})
            alert("회원 가입 실패!")   
          }        
        }
      }      
    }catch(error){
      console.log("error :::", error)
    }        
  }

  return (
    <S.PageContainer>
      <S.ContentsContainer>
        <S.Logo src="/logo-custom.png" alt="Logo" />
        <S.TextBox>회원가입하고 보안 걱정 없는 PDF 열람 서비스를 이용해 보세요</S.TextBox>
        <S.CustomInput placeholder="이메일 또는 아이디를 입력해 주세요." 
                onChange={(e)=>{
                  setUserInfo({
                    ...userInfo,
                    "username":e.target.value,
                  })
                }}
                value={userInfo && userInfo.username}
        />
        <S.CustomInput placeholder="비밀번호를 입력해 주세요." 
        type='password'
        onChange={(e)=>{
          setUserInfo({
            ...userInfo,
            "password":e.target.value,
          })
        }}
        value={userInfo && userInfo.password}        
        />
        <S.AuthButton onClick={handleSignup}>회원가입</S.AuthButton>
        <S.FooterBox>
          <S.TextBox>이미 크립톤 회원이신가요?</S.TextBox>
          <S.LinkTextBox onClick={() => navigate('/login')}>로그인하기</S.LinkTextBox>
        </S.FooterBox>
      </S.ContentsContainer>
    </S.PageContainer>
  );
}
