import styled from 'styled-components/native';

const BaseTextRegular = styled.Text`
  font-family: 'SF Pro Display Regular';
`;

const BaseTextBold = styled.Text`
  font-family: 'SF Pro Display Bold';
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
`;

export const FieldBold = styled(BaseTextBold)`
  font-size: 12px;
`;

export const Field = styled(BaseTextRegular)`
  font-size: 12px;
`;
