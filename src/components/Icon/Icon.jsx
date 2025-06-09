import styled from 'styled-components';

const IconContainer = ({className, id, ...props}) => (
  <div className={className} {...props}>
    <i className={`fa fa-${id}`} aria-hidden="true"></i>
  </div>
);

export const Icon = styled(IconContainer)`
  font-size: ${({fz = '24px'}) => fz};
  margin: ${({margin = '0'}) => margin};
  color: ${({disabled}) => disabled ? '#ccc' : 'currentColor'};

  &:hover {
    cursor: pointer;
  }
`
