import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import GoBackButton from './Button';

const StyledGoBack = styled(GoBackButton)`
  display: flex;
  justify-content: center;
`;

const StyledGoBackLink = styled(NavLink)`
  margin-bottom: 10px;
  padding: 0 5px;
  font-size: 16px;
  border: none;
  color: #4fb3f3;
  font-weight: bold;
  background: transparent;
  transition: box-shadow, 0.9s;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: rgba(240, 46, 170, 0.4) 0px 5px,
      rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px,
      rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  }
`;

export { StyledGoBack, StyledGoBackLink };
