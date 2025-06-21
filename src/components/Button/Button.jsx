import PropTypes from "prop-types";
import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
const ButtonLayout = ({className, width, children, ...props}) => {
	return (
    <button className={className} {...props}>{children}</button>
	)
};

export const Button = styled(ButtonLayout)`
  width: ${({width = '100%'}) => width};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  text-align: center;
  font-size: 18px;
  min-width: 100px;
  height: 32px;

  &:hover:not([disabled]) {
    cursor: pointer;
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
}
