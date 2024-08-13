import * as S from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <S.NotFoundContainer>
        <S.Title>404</S.Title>
        <S.SubTitle>Sorry, we were unable to find that page</S.SubTitle>
        <S.HomeButton onClick={() => navigate('/')}>Back To Home</S.HomeButton>
      </S.NotFoundContainer>
    </>
  );
}
