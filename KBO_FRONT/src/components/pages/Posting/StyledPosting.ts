import styled from 'styled-components';

export const StyledTitle = styled.div`
    text-align:center;
    width : 30%;
    border: 4px solid #687769;
    margin : 0 auto;
    margin-top:50px;
    
    
    input{
        font-family: 'KBO-Dia-Gothic_bold';
        border:none;
        outline:none;
        background-color:transparent;
        &::placeholder{
            color:#3b649461;
        }
    }
`


export const StyledContent = styled.div`
    textarea {
        display: flex;
        width: 30%;
        margin: 0 auto;
        margin-top: 50px;
        height: 250px;
        overflow: auto; /* 내용이 넘칠 때 스크롤 표시 */
    
        justify-content: space-between;
        border: 4px solid #687769;
        font-family: 'KBO-Dia-Gothic_medium';
        background-color: transparent;
        resize: none;
        &::placeholder{
            color:#3b649461;
        }
    }
`;

export const StyledList = styled.ul`
    list-style:none;
`

export const StyledButton = styled.button`
    border-radius:5px;
    border-color:transparent;
    background-color:#5C9B57;
    position:fixed;
    bottom:50px;
    right:100px;
    width:100px;
    height:50px;
    color:#ffffff;

    font-family:'KBO-Dia-Gothic_light';
`

