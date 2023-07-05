import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Nav } from "./Nav";

const StyledNav = styled(Nav)`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 25px 0;
   background: linear-gradient(195deg, #61f34f, #4ff38f, #b3f34f);
   border-bottom: 2px solid #4FB3F3;
    
   @media (min-width: 768px) {
        padding: 25px;
    }
`
const StyledLink = styled(NavLink)`
    margin:0 40px;
    color: #4FB3F3;
    font-size: 20px;
    font-weight: 700;
    transition: color, .9s;
    &:hover,
    &:focus{
    color: #E14FF3;
    box-shadow: 
    rgba(240, 46, 170, 0.4) 0px 5px, 
    rgba(240, 46, 170, 0.3) 0px 10px, 
    rgba(240, 46, 170, 0.2) 0px 15px,
    rgba(240, 46, 170, 0.1) 0px 20px,
     rgba(240, 46, 170, 0.05) 0px 25px;
    }
`
export { StyledNav, StyledLink };