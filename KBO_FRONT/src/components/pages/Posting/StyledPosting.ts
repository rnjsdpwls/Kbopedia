import styled from 'styled-components'


export const H1 = styled.div`
    width : 50%;
    margin : 50px auto 15px auto;
`

export const StyledTable = styled.table`

    border-collapse: collapse;
    width : 50%;
    height : 100px;
    text-align:center;
    margin : 50px auto;
    tr {
        border-top: 3px solid #5C9B57;
        font-size: 28px;
        line-height: 60px;
    }
    td {
        font-size : 24px;
        padding: 8px; // 셀 안쪽 여백 추가
    }
    td.title {
        border-right: 3px solid #5C9B57;
        width : 15%;
    }
    td.nickname {
        border-right: 3px solid #5C9B57;
    }
    td.userInput {
        text-align: left;
        border-left: 2px solid #5c9b57; // 입력란 왼쪽에 선 추가
    }
    #content {
        vertical-align: top;
    }
    #head {
        border : none;
    }
`; 

export const Input = styled.input`
    width : 50%;
    height : 40px;
    border: 1px solid #E4E4E4;
    &::placeholder{
        color:#B7B7B7;
    }
`


export const StyledContent = styled.div`
    textarea {
            display: flex;
            width: 100%;
            margin: 0 auto;
            height: 250px;
            overflow: auto; /* 내용이 넘칠 때 스크롤 표시 */
        
            justify-content: space-between;
            border: 1px solid #E4E4E4;
            font-family: 'KBO-Dia-Gothic_medium';
            background-color: transparent;
            resize: none;
            &::placeholder{
                color:#B7B7B7;
            }
`;


export const StyledPostBtn = styled.button`
    border-radius:5px;
    border-color:transparent;
    background-color:#5C9B57;
    color:#ffffff;
    width:100px;
    height:50px;
    font-family:'KBO-Dia-Gothic_light';
    font-size:16px;
`

export const PostBtnPosition = styled.div`
    width:1100px;
    height:50px;
    margin:120px auto;
    text-align:right;
`   