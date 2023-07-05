import styled from "styled-components";

const StyledCast = styled.div`
    display: flex;
    margin: 10px;
    
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }

    li {
        width: 120px;
        background-color: white;
    }

    img{
        width: 120px;
        height: auto;
        margin-bottom: 5px;
    }

    h3 {
        margin-bottom: 5px;
        padding: 0 5px;
        font-size: 16px;
        line-height: 1.3;
    }
    p {
        margin-bottom: 5px;
        padding: 0 5px;
        font-size: 14px;
        color: grey;
    }
`

export default StyledCast;