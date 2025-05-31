import { Logo } from './components';
import styled from 'styled-components';

export const HeaderLayout = ({className}) => (
  <header className={className}>
    <Logo />
  </header>
);

export const Header = styled(HeaderLayout)`
  position: fixed;
  top: 0;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0 0 5px #000;
  background-color: white;
`;
