import { H1 } from "../H1/H1";
import styled from "styled-components";
import { PROP_TYPE } from "../../constants";

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

export const Error = ({errorMessage}) => (
  errorMessage &&
  <StyledError>
    <H1>Ошибка</H1>
    <div>{errorMessage}</div>
  </StyledError>
);

Error.propTypes = {
  // errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
  errorMessage: PROP_TYPE.ERROR,
}
