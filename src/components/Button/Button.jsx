import styled from "styled-components";

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
