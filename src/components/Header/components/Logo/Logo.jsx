import styled from 'styled-components';

const IconContainer = ({className}) => (
  <div className={className}>
    <i className="fa fa-code" aria-hidden="true"></i>
  </div>
);

const Icon = styled(IconContainer)`
  font-size: 60px;
  margin-right: 10px;
`

const LargeText = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 1;
  margin-top: 7px;
`;

const SmallText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const LogoLayout = ({className}) => (
  <div className={className}>
    <Icon />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчика</SmallText>
    </div>
  </div>
);

export const Logo = styled(LogoLayout)`
  display: flex;
`
