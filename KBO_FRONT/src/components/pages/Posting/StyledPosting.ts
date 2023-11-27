import styled from 'styled-components'

export const Container = styled.div`

`
// display:flex;
export const StyledTable = styled.table`
    margin-top : 250px;
    width : 75%;
    height : 100px;
    text-align:center;
    margin : 0 auto;
    tr {
        border-top: 3px solid #5c9b57;
        line-height:60px;
    }
    td {
        border: 3px solid #5C9B57;
        width : 25%;
    }
`;
// border-collapse: collapse;
// font-family: 'KBO-Dia-Gothic_medium';

// width: 1000px;
// margin-top: 150px;
// margin-right:auto;
// @media (min-width: 1000px) {
// }
// tr {
//     border-top: 3px solid #5C9B57;
//     text-align: center;
//     font-size:28px;
//     line-height:60px;
// }
// td{
//     font-family: 'KBO-Dia-Gothic_light';
//     font-size:16px;
// } 


export const StyledContent = styled.div`
`;
// textarea {
//     display: flex;
//     width: 30%;
//     margin: 0 auto;
//     margin-top: 50px;
//     height: 250px;
//     overflow: auto; /* 내용이 넘칠 때 스크롤 표시 */

//     justify-content: space-between;
//     border: 4px solid #687769;
//     font-family: 'KBO-Dia-Gothic_medium';
//     background-color: transparent;
//     resize: none;
//     &::placeholder{
//         color:#3b649461;
//     }
// }


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