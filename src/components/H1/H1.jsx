import styled from "styled-components";

const H1Layout = ({className, children, ...props}) => {
	return (
    <h1 className={className} {...props}>{children}</h1>
	)
};

export const H1 = styled(H1Layout)`
  font-size: 40px;
  margin: 0;
`;
