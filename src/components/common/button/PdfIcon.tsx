import styled from '@emotion/styled';

interface PdfIconProps {
  width?: string;
  height?: string;
  marginRight?: string;
}

export default function PdfIcon({ width = '20px', height = '20px', marginRight = '16px' }: PdfIconProps) {
  return <PdfIconBox src="/pdf-icon.png" alt="pdf" width={width} height={height} marginRight={marginRight} />;
}

const PdfIconBox = styled.img<PdfIconProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-right: ${({ marginRight }) => marginRight};
  background-size: cover;
`;
