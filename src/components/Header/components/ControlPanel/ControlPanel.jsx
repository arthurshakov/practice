import styled from 'styled-components';
import { Icon } from '../../..';
import { Link, useNavigate } from 'react-router-dom';

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  text-align: center;
  font-size: 18px;
  min-width: 100px;
  height: 32px;
`;

const BackwardIcon = styled.div`
  // &:hover {
  //   cursor: pointer;
  // }
  cursor: pointer;
`

const ControlPanelLayout = ({className}) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <RightAligned>
        <StyledLink to="/login">Войти</StyledLink>
      </RightAligned>
      <RightAligned>
        <BackwardIcon onClick={() => navigate(-1)}><Icon id="backward" margin="10px 15px 0 0" /></BackwardIcon>
        <Link to="/post"><Icon id="file-text-o" margin="10px 15px 0 0" /></Link>
        <Link to="/users"><Icon id="users" margin="10px 0 0 0" /></Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelLayout)`

`;
