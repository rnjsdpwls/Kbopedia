import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    margin: 80px 0;
`

export const StyledTable = styled.table`
    border-collapse: collapse;
    font-family: 'KBO-Dia-Gothic_medium';
    width: 65%;
    margin: 60px auto;

    height: 0;
    th, td {
        text-align: center; /* Center-align text within the cells */
        width: 20%; /* Set each cell to take up 20% of the table width */
    }

    tr {
        border-top: 3px solid #5C9B57;
        font-size: 28px;
        line-height: 60px;
    }

    td {
        font-family: 'KBO-Dia-Gothic_light';
        font-size: 16px;
        padding: 13px;
        font-weight: bold;
    }
`;


export const StyeldImages = styled.img`
    display:block;
    width:85px;
    height:65px;
    padding-top:6px;
    padding-bottom:6px;
`

export const ImagePosition = styled.div`
    margin-left:auto;
    margin-top:55px;
    margin-right:50px;
    @media (max-width: 600px){
        margin-left:0;
    }
`

export const StyledPostBtn = styled.button`
    border-radius:5px;
    border-color:transparent;
    background-color:#5C9B57;
    color:#ffffff;
    width:100px;
    height:50px;
    font-size:16px;
    margin: 5px;
`

export const PostBtnPosition = styled.div`
    width:1100px;
    height:50px;
    margin:43px auto;
    text-align:right;
`

export const Pagebutton = styled.button`
    padding: 10px;
    font-size: 20px;
    color: #5C9B57;
`

export const StyledTitle = styled.div`
    margin:50px auto;
    width: 50%;
    padding : 10px;
    border-bottom : 3px solid #5c9b57;
`

export const StyledPosts = styled.div`
    margin: 0 auto;
    padding : 10px;
    width: 50%;
    height : 250px;
    border: 1px solid #E4E4E4;

`


export const InputForm = styled.input`
    width: 30%; // 너비 설정
    padding: 10px 15px; // 안쪽 여백 설정
    margin: 10px 0; // 바깥쪽 여백 설정
    border-radius: 5px; // 모서리 둥글게 처리
    border: 1px solid #ccc; // 테두리 스타일 설정
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1); // 그림자 효과 추가
    font-size: 16px; // 글꼴 크기 설정
    color: #333; // 글꼴 색상 설정
    background-color: #fff; // 배경색 설정

    // 포커스 됐을 때 스타일
    &:focus {
        border-color: #5C9B57; // 포커스 됐을 때 테두리 색상 변경
        outline: none; // 기본 아웃라인 제거
        box-shadow: 0px 0px 8px rgba(92, 155, 87, 0.4); // 포커스 됐을 때 그림자 색상 변경
    }

    // 입력 필드 플레이스홀더 스타일
    &::placeholder {
        color: #aaa; // 플레이스홀더 색상
        font-style: italic; // 플레이스홀더 글꼴 스타일
    }

`


export const CommunityTitle = styled.div`
    font-size: 70px;
    margin: auto;
    cursor: pointer;
`;