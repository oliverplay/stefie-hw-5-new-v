import styled from "styled-components";

const StyledNotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        
        font-size: 16px;
        margin-bottom: 20px;
        @media (min-width: 768px) {
           font-size: 28px; 
        }
    }

    img{
        margin-bottom: 20px;
        border: 2px solid #E14FF3;
    }
`;

export default StyledNotFound;