import PropTypes from "prop-types";
import { forwardRef } from "react";
import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
const InputLayout = forwardRef(({className, width, ...props}, ref) => {
	return (
    <input className={className} {...props} ref={ref} />
	)
});

export const Input = styled(InputLayout)`
  width: ${({width = '100%'}) => width};
  height: 40px;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
`;

Input.propTypes = {
  width: PropTypes.string,
};
