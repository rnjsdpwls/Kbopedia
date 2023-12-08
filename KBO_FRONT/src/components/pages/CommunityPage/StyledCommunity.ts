import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
`


export const StyledTable = styled.table`
    border-collapse: collapse;
    font-family: 'KBO-Dia-Gothic_medium';
    width: 1000px;
    margin-top: 60px;
    margin-right: auto;

    height:0;
    th, td {
        text-align: center; /* Center-align text within the cells */
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
position: relative;
top: 780px;
left: -895px;
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