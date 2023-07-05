import styled from 'styled-components';
import { StyledLink } from 'components/Nav/styled-nav';

const StyledMovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    
    ul {
        margin-left: 5px;

        @media (min-width: 768px) {
            display: flex;
            flex-direction: row;
            margin-left: 20px;
        }
    }
    li {
        margin-right: 10px;
        margin-bottom: 10px;
    }

    p {
        color: grey;
        font-size: 14px;
    }
`;

const StyledFlexContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }

`
const StyledLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    padding: 20px 0;
    border-bottom: 2px solid #4FB3F3;
    background: linear-gradient(195deg, #61f34f, #4ff38f, #b3f34f);

    @media (min-width: 768px) {
        justify-content: center;
    }
`;
const StyledDetailsLink = styled(StyledLink)`
    margin: 5px 40px;
    font-size: 18px;
    font-weight: b;
    &:hover,
    &:focus,
    &:active{
    color: #E14FF3;
    }
`;
const StyledDetailsFlex = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;

    @media (min-width: 768px) {
        margin-left: 25px;
    }

`
export {
    StyledMovieDetails,
    StyledDetailsLink,
    StyledLinkContainer,
    StyledDetailsFlex,
    StyledFlexContainer
};