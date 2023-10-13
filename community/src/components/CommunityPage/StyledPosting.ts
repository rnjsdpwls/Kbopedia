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
