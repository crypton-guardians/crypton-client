import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input`
  ${({ theme }) => css`
    width: 80%;
    height: 50px;
    padding: 12px 20px;
    border: none;
    border-radius: 14px;
    ${theme.typography.body2R};
    color: ${theme.colors.black[500]};
    background-color: ${theme.colors.black[800]};

    &::placeholder {
      ${theme.typography.body2R};
      color: ${theme.colors.black[500]};
    }

    &:focus {
      outline: none;
      border: solid 1px ${theme.colors.black[600]};
    }
  `}
`;

export default function SearchInput({ placeholder, value, onChange }: SearchInputProps) {
  return <Input type="text" placeholder={placeholder} value={value} onChange={onChange} />;
}
