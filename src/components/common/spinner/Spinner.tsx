import Lottie from 'lottie-react';
import styled from '@emotion/styled';
import spinnerAnimation from './SpinnerAnimation.json';

export default function Spinner() {
  return (
    <SpinnerBox>
      <Lottie animationData={spinnerAnimation} loop={true} />
    </SpinnerBox>
  );
}

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;
`;
