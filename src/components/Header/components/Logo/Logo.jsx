import styled from 'styled-components';
import { Icon } from '../../..';
import { Link } from 'react-router-dom';

const LargeText = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 1;
  margin-top: 7px;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const LogoLayout = ({className}) => (
  <Link className={className} to="/">
    <Icon fz="60px" margin="0 10px 0 0" id="code" />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчика</SmallText>
    </div>
  </Link>
);

export const Logo = styled(LogoLayout)`
  display: flex;
  color: #000;
  text-decoration: none;
`
