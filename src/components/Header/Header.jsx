import { ControlPanel, Logo } from './components';
import styled from 'styled-components';

const Description = styled.div`
  font-style: italic;
`;

export const HeaderLayout = ({className}) => (
  <header className={className}>
    <Logo />
    <Description>Веб-технологии<br />Написание кода<br />Разбор ошибок</Description>
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderLayout)`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0 0 5px #000;
  background-color: white;
`;
