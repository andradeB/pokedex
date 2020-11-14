import styled from 'styled-components/native';

const FontSF = styled.Text`
  font-family: 'SF Pro Display';
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
  color: ${({ theme }) => theme.color_text.grey};
`;

export const FieldBold = styled(BaseTextBold)`
  font-size: 12px;
`;

export const Field = styled(BaseTextRegular)`
  font-size: 12px;
`;
