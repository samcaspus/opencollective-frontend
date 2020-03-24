import styled from 'styled-components';
import { background, color, border, typography, space } from 'styled-system';
import StyledLink from '../StyledLink';

export const HomePrimaryLink = styled(StyledLink)`
  text-align: center;
  padding: 15px 24px;
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.Paragraph}px;
  line-height: ${props => props.theme.lineHeights.Caption};
  min-width: 175px;
  ${background}
  ${color}
  ${border}

  &:visited {
    color: #fff;
    outline: none;
    border: none;
  }

  @media screen and (min-width: 88em) {
    min-width: 232px;
  }
`;

HomePrimaryLink.defaultProps = {
  buttonStyle: 'dark',
};

export const HomeStandardLink = styled(StyledLink)`
  font-weight: 500;
  padding: 10px 20px;
  ${typography};
  ${space};
`;

HomeStandardLink.defaultProps = {
  buttonStyle: 'standard',
  fontSize: '13px',
  lineHeight: '16px',
};
