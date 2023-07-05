import styled from 'styled-components';

import { Container } from './Container';

const StyledContainer = styled(Container)`
  max-width: 320px;
  margin: 0px 10px;
  
  @media screen and (min-width:768px) {
    max-width: 768px;
    padding: 0 25px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }

   @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 150px;
  }

  @media screen and (min-width: 1500px) {
    max-width: 1500px;
    padding: 0 175px;
  }
`;

const StyledContainerNoMargin = styled(Container)`
    margin: 0;

`
export { StyledContainer, StyledContainerNoMargin };