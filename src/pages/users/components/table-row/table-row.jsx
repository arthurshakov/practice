import styled from "styled-components";

const TableRowLayout = ({children, className}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const TableRow = styled(TableRowLayout)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({border}) => border ? '1px solid black' : 'none'};
  border-radius: 5px;
  padding: ${({border}) => border ? '10px' : '0'};

  > div {
    display: flex;
    padding: 0 10px;
  }

  .login-column {
    width: 172px;
  }

  .registered-at-column {
    width: 213px;
  }

  .role-column {
    width: auto;
  }
`
