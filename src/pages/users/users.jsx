import { H1, Content } from '../../components';
import { UserRow, TableRow } from './components';
import { useServerRequest } from '../../hooks';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ROLE } from '../../constants';

const UsersLayout = ({className}) => {
  const [roles, setRoles] = useState(null);
  const [users, setUsers] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [shouldUpdateUsersList, setShouldUpdateUsersList] = useState(false);

  const requestServer = useServerRequest();

  useEffect(() => {
    Promise.all([
      requestServer('fetchRoles'),
      requestServer('fetchUsers')
    ])
      .then(([rolesResponse, usersResponse]) => {
        if (usersResponse.error || rolesResponse.error) {
          setErrorMessage(usersResponse.error || rolesResponse.error);
          return;
        }

        setUsers(usersResponse.res);
        setRoles(rolesResponse.res);
      })
    ;
  }, [requestServer, shouldUpdateUsersList]);

  const onUserRemove = (userId) => {
    requestServer('removeUser', userId)
      .then(() => {
        setShouldUpdateUsersList(!shouldUpdateUsersList);
      })
    ;
  };

  return (
    <div className={className}>
      <Content errorMessage={errorMessage}>
        <H1>Пользователи</H1>
        <div className="table">
          <TableRow>
            <div className="login-column">Логин</div>
            <div className="registered-at-column">Дата регистрации</div>
            <div className="role-column">Роль</div>
          </TableRow>

          {users && users.map(({id, login, registeredAt, roleId}) => (
            <UserRow
              key={id}
              id={id}
              login={login}
              registeredAt={registeredAt}
              roleId={roleId}
              roles={roles.filter(({id: filteredRoleId}) => filteredRoleId !== ROLE.GUEST)}
              onUserRemove={() => onUserRemove(id)}
            />
          ))}
        </div>
      </Content>
    </div>
  )
}

export const Users = styled(UsersLayout)`
  display: grid;
  grid-template-columns: 100%;
  gap: 10px;
  justify-items: center;
  width: 570px;
  margin-right: auto;
  margin-left: auto;
  font-size: 18px;

  .table {
    display: grid;
    grid-template-columns: 100%;
    gap: 10px;
    width: 100%;
  }
`;
