import { Icon } from '../../../../components';
import { PROP_TYPE } from '../../../../constants';
import { TableRow } from '../table-row/table-row';
import styled from 'styled-components';
import { useState } from 'react';
import { useServerRequest } from '../../../../hooks';
import PropTypes from 'prop-types';

export const UserRowLayout = ({
  className,
  id,
  login,
  registeredAt,
  roleId: userRoleId,
  roles,
  onUserRemove,
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
  const [initialRoleId, setInitialRoleId] = useState(userRoleId);

  const onRoleChange = ({target}) => {
    setSelectedRoleId(Number(target.value));
  };

  const saveButtonIsDisabled = selectedRoleId === initialRoleId;
  const requestServer = useServerRequest();

  const onRoleSave = (userId, newRoleId) => {
    requestServer('updateUserRole', userId, newRoleId)
      .then(() => {
        setInitialRoleId(newRoleId);
      })
    ;
  };

  return (
    <div className={`${className} table-row`}>
      <TableRow border>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select name="" id="" value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({id: roleId, name: roleName}) => (
              <option className="role" value={roleId} key={roleId}>{roleName}</option>
            ))}
          </select>

          <Icon
            id="floppy-o"
            margin="0 0 0 10px"
            disabled={saveButtonIsDisabled}
            onClick={() => onRoleSave(id, selectedRoleId)}
          />
        </div>
      </TableRow>
      <Icon
        id="trash-o"
        margin="0 0 0 10px"
        onClick={onUserRemove}
      />
    </div>
  );
};

export const UserRow = styled(UserRowLayout)`
  display: flex;
  align-items: center;

  select {
    font-size: 16px;
    padding: 5px;
  }
`;

UserRow.propTypes = {
  id: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  registeredAt: PropTypes.string.isRequired,
  roleId: PROP_TYPE.ROLE_ID.isRequired,
  roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
  onUserRemove: PropTypes.func.isRequired,
}
