import styled from 'styled-components';

import Background from '../../images/search.png'
const StyledForm = styled.form`
    display: flex;
    margin: 0 0 15px 0;

    input {
        padding: 10px 10px 0 5px;
        font-size: 16px;
        border: none;
        border-bottom: 1px solid #4FB3F3;
        background: transparent;
        transition: box-shadow, .9s;
        &:hover,
        &:focus{
            outline: none;
            box-shadow: 
                rgba(240, 46, 170, 0.4) 0px 5px, 
                rgba(240, 46, 170, 0.3) 0px 10px, 
                rgba(240, 46, 170, 0.2) 0px 15px,
                rgba(240, 46, 170, 0.1) 0px 20px,
     rgba(240, 46, 170, 0.05) 0px 25px;
        }
    }

    button {
        padding: 15px;
        font-size: 10px;
        background: transparent;
        border: 1px solid transparent;
        border-bottom: 1px solid #4FB3F3;
        background-image: url(${Background});
        background-size: 25px 25px;
        background-repeat: no-repeat;
        background-position: center;
        transition: box-shadow, .9s;
        &:hover,
        &:focus{
            box-shadow: 
                rgba(240, 46, 170, 0.4) 0px 5px, 
                rgba(240, 46, 170, 0.3) 0px 10px, 
                rgba(240, 46, 170, 0.2) 0px 15px,
                rgba(240, 46, 170, 0.1) 0px 20px,
             rgba(240, 46, 170, 0.05) 0px 25px;
            }
        }
    }

`;

export default StyledForm;