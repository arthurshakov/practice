import styled from 'styled-components';
import { Icon, Button } from '../../..';
import { Link, useNavigate } from 'react-router-dom';
import { ROLE } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

const UserName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const ControlPanelLayout = ({className}) => {
  const navigate = useNavigate();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout(session));
    sessionStorage.removeItem('userData');
  }

  const isAdmin = checkAccess([ROLE.ADMIN], roleId);

  return (
    <div className={className}>
      <RightAligned>
        {
          roleId === ROLE.GUEST ?
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
            :
          <>
            <UserName>{login}</UserName>
            <Icon id="sign-out" margin="0 0 0 12px" onClick={onLogout} />
          </>
        }
      </RightAligned>
      <RightAligned>
        <Icon id="backward" margin="10px 0 0 15px" onClick={() => navigate(-1)} />
        {
          isAdmin && (
            <>
              <Link to="/post"><Icon id="file-text-o" margin="10px 0 0 15px" /></Link>
              <Link to="/users"><Icon id="users" margin="10px 0 0 15px" /></Link>
            </>
          )
        }
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelLayout)`

`;
