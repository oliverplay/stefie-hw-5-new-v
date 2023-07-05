import { StyledGoBackLink } from './styled-button';
import { useLocation } from 'react-router-dom';

const GoBackButton = ({ className }) => {
  const location = useLocation();
  const goBackPath = location.state?.from || '/movies';

  return (
    <div className={className}>
      <StyledGoBackLink to={goBackPath} state={{ from: location.pathname }}>
        Back
      </StyledGoBackLink>
    </div>
  );
};

export default GoBackButton;
