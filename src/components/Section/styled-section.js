import styled from 'styled-components';

import { Section } from './Section';

const StyledSection = styled(Section)`
{
  padding-top: 10px;
  padding-bottom: 30px;

  @media screen and (min-width:1200px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`
export { StyledSection };

