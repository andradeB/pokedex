import styled from 'styled-components/native';

interface FontProps {
  color?: string;
}

const FontSF = styled.Text<FontProps>`
  font-family: 'SF Pro Display';
  ${({ color }) =>
    color &&
    `
    color: ${color}
  `}
`;

const BaseTextRegular = styled(FontSF)`
  font-weight: 400;
`;

const BaseTextBold = styled(FontSF)`
  font-weight: 700;
`;

export const H1Header = styled(BaseTextBold)`
  font-size: 100px;
`;

export const H2Header = styled(BaseTextBold)`
  font-size: 32px;
`;

export const H3Header = styled(BaseTextBold)`
  font-size: 26px;
`;

export const BodyBold = styled(BaseTextBold)`
  font-size: 16px;
`;

export const Body = styled(BaseTextRegular)`
  font-size: 16px;
  color: ${({ theme, color }) => color || theme.color_text.grey};
`;

export const FieldBold = styled(BaseTextBold)`
  font-size: 12px;
`;

export const Field = styled(BaseTextRegular)`
  font-size: 12px;
`;
