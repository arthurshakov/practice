import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../../components";
import { openModal, CLOSE_MODAL, removePostAsync } from "../../../../actions";
import styled from "styled-components";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { checkAccess } from "../../../../utils";
import { ROLE } from "../../../../constants";
import { selectUserRole } from "../../../../selectors";
import PropTypes from "prop-types";

const SpecialPanelLayout = ({className, id, publishedAt, editButton}) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();
  const userRole = useSelector(selectUserRole);

  const onPostRemove = (postId) => {
    dispatch(openModal({
      text: 'Удалить комментарий?',
      onConfirm: () => {
        dispatch(removePostAsync(requestServer, postId))
          .then(() => navigate('/'));
        dispatch(CLOSE_MODAL);
      },
      onCancel: () => dispatch(CLOSE_MODAL),
    }));
  };

  const isAdmin = checkAccess([ROLE.ADMIN], userRole);

  return (
    <div className={className}>
      <div className="published-at">
        {
          publishedAt &&
          <>
            <Icon id="calendar-o" margin="0 10px 0 0" fz="18px" inactive={true} /> {publishedAt}
          </>
        }
      </div>
      {
        isAdmin &&
        <div className="buttons">
          { editButton }
          {publishedAt && <Icon id="trash-o" fz="24px" margin="0 0 0 10px" onClick={() => onPostRemove(id)} /> }
        </div>
      }
    </div>
  );
}

export const SpecialPanel = styled(SpecialPanelLayout)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({margin = '20px 0'}) => margin};

   .published-at,
  .buttons {
    display: flex;
    align-items: center;
  }
`;

SpecialPanel.propTypes = {
  id: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  editButton: PropTypes.node.isRequired,
}
