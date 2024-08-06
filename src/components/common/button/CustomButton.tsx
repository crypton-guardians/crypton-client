/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  width?: string;
  height?: string;
  textColor?: string;
}

const buttonStyles = {
  default: css`
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    margin: 10px;

    &:hover {
      background-color: #333;
    }

    &:active {
      background-color: #555;
    }
  `,
  outline: css`
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    margin: 10px;

    &:hover {
      background-color: #f9f9f9;
    }

    &:active {
      background-color: #e9e9e9;
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  color: ${({ textColor }) => textColor || 'inherit'};

  &:focus-visible {
    box-shadow: #222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow 0.2s;
  }

  &:disabled {
    border-color: #ddd;
    color: #ddd;
    cursor: not-allowed;
    opacity: 1;
  }

  ${({ variant = 'default' }) => variant === 'default' && buttonStyles.default}
  ${({ variant = 'default' }) => variant === 'outline' && buttonStyles.outline}
`;

const CustomButton: React.FC<ButtonProps> = ({ disabled, children, onClick, variant, width, height, textColor }) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      width={width}
      height={height}
      textColor={textColor}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
