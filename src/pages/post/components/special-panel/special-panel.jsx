import { Icon } from "../../../../components";
import styled from "styled-components";

const SpecialPanelLayout = ({className, publishedAt, editButton}) => {
  return (
    <div className={className}>
      <div className="published-at">
        <Icon id="calendar-o" margin="0 10px 0 0" fz="18px" /> {publishedAt}
      </div>
      <div className="buttons">
        {/* <Icon id="floppy-o" margin="0 10px 0 0" fz="24px" onClick={() => console.log('clicked')} /> */}
        { editButton }
        <Icon id="trash-o" fz="24px" onClick={() => console.log('clicked')} />
      </div>
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

  .published-at {
    div {
      cursor: default;
    }
  }
`;
