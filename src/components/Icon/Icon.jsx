import PropTypes from 'prop-types';
import styled from 'styled-components';

// eslint-disable-next-line
const IconContainer = ({className, id, inactive, ...props}) => (
  <div className={className} {...props}>
    <i className={`fa fa-${id}`} aria-hidden="true"></i>
  </div>
);

export const Icon = styled(IconContainer)`
  font-size: ${({fz = '24px'}) => fz};
  margin: ${({margin = '0'}) => margin};
  color: ${({disabled}) => disabled ? '#ccc' : 'currentColor'};

  &:hover {
    cursor: ${({inactive}) => inactive ? 'default' : 'pointer'};
  }
`
Icon.propTypes = {
  id: PropTypes.string.isRequired,
  inactive: PropTypes.bool,
}
