import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
`;

export const QuizTitle = styled.h1`
  font-weight: 700;
  font-size: 76px;
  text-align: center;
  color: #000000;
  position: absolute;
  left: 45.5vw;  /* Responsive positioning */
  top: 6vh;  /* Responsive positioning */
`;

export const QuizBox = styled.div`
 left: 32vw;  /* Responsive positioning */
top: 19vh;  /* Responsive positioning */
justify-content: center;
box-sizing: border-box;
display: flex;
align-items: center;
position: relative;
width: 636px;
height: 97px;
background: #FFFFFF;
border: 10px solid #5C9B57;
border-radius: 100px;
font-weight: 500;
font-size: 30px;
color: #000000;
`;

export const QuizOption = styled.div`
font-size: 38px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
margin-top :10px;
background: #D9D9D9;
color: #000000;
position: relative;
left: 38vw;  /* Responsive positioning */
top: 21vh;  /* Responsive positioning */
width: 425px;
height: 68px;
border-radius: 20px;

`;

export const QuizAnswer = styled.div`
  font-size: 40px;
  padding: 70px;
  background-color: #0D3F6A;
  color: #FFFFFF;
  position: relative;
  left: 39vw;  /* Responsive positioning */
  top: -12vh;  /* Responsive positioning */
  width: 386px;
  border-radius: 30px;
  text-align: center;
`;

export const AnswerButton = styled.button`
background-color: white;
color: #AEAEAE;
border: none;
padding: 15px;
width: 100px;
border-radius: 30px;
font-size: 20px;
cursor: pointer;
font-weight: bold;
position : relative;
top: 5vh;  /* Responsive positioning */
left: 0vw;  /* Responsive positioning */
`;


// import styled from 'styled-components';

// export const Container = styled.div`
//   position: absolute;
// `;

// export const QuizTitle = styled.text`
// font-weight: 700;
// font-size: 76px;
// text-align: center;
// color: #000000;
// position: absolute;
// left: 45vw;
// top: 82px;
// `

// export const QuizBox = styled.div`
// box-sizing: border-box;
// display: flex;
// align-items: center;
// position: relative;
// width: 636px;
// height: 97px;
// left: 31.5vw;
// top: 214px;
// background: #FFFFFF;
// border: 10px solid #5C9B57;
// border-radius: 100px;
// font-weight: 500;
// font-size: 30px;
// color: #000000;
// `;


// export const QuizOption = styled.div`
//   font-size: 38px;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top :10px;
//   background: #D9D9D9;
//   color: #000000;
//   position: relative;
//   left: 38vw;
//   top: 250px;
//   width: 425px;
//   height: 68px;
//   border-radius: 20px;
// `;



// export const QuizAnswer = styled.div`
  // font-size: 40px;
  // padding: 70px;
  // background-color: #0D3F6A;
  // color: #FFFFFF;
  // position: relative;
  // left: 675px;
  // top: -10px;
  // width: 386px;
  // border-radius: 30px;
  // text-align: center;
// `;


// export const AnswerButton = styled.div`
// background-color: white;
// color: #AEAEAE;
// border: none;
// padding: 15px;
// width: 100px;
// border-radius: 30px;
// font-size: 20px;
// cursor: pointer;
// font-weight: bold;
// position : relative;
// top : 50px;
// left: 72px;
// `;

