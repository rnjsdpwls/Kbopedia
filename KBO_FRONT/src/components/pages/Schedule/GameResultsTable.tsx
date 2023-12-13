import React from 'react';
import gameResultsData from '../../../db/gameResults.json';
import { TimeA, Same, Time, Above, TeamandScore, CellD, Hline, HrB, StyledContainer, StyleDiv, StyledContainerbig } from './GameResultsTableA';

interface GameResult {
  date: string;
  time: string;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  stadium: string;
}

function GameResultsTable() {
  const gameResults = gameResultsData.gameResults;

  // Group game results by date
  const resultsByDate: { [date: string]: GameResult[] } = {};

  gameResults.forEach((result) => {
    if (!resultsByDate[result.date]) {
      resultsByDate[result.date] = [];
    }
    resultsByDate[result.date].push(result);
  });

  // Initialize a flag to track whether the header has been displayed
  let headerDisplayed = false;

  return (
    <div className="centered" style={{ position: 'relative', top: '0px', margin: '0 auto', width: '1300px', marginTop: '80px', marginBottom: '90px' }}>
    {Object.keys(resultsByDate).map((date, dateIndex) => (
      <div key={dateIndex}>
        {dateIndex === 0 && <Hline></Hline>}

          {/* Header Row */}
          {!headerDisplayed && (
            <Above>
              <TimeA>날짜</TimeA>
              <Same>시간</Same>
              <Same>경기</Same>
              <Same>구장</Same>
            </Above>
          )}

          {/* Set the headerDisplayed flag to true after displaying the header */}
          {!headerDisplayed && (headerDisplayed = true)}

          <Hline></Hline>

          {/* Results for the current date */}
          <StyledContainerbig key={dateIndex}>
            <StyleDiv>
              <p>{date}</p>
            </StyleDiv>
            <StyledContainer>
              {resultsByDate[date].map((result: GameResult, resultIndex: number) => (
                <div key={resultIndex}>
                  <CellD>
                    <Time>{result.time}</Time>
                    <TeamandScore>{`${result.team1} ${result.score1} vs ${result.team2} ${result.score2}`}</TeamandScore>
                    <TeamandScore>{result.stadium}</TeamandScore>
                  </CellD>

                  {resultIndex !== resultsByDate[date].length - 1 && <HrB></HrB>} {/* 맨 마지막 아이템이 아닌 경우에만 초록색 선을 렌더링 */}
                </div>
              ))}
            </StyledContainer>
          </StyledContainerbig>

         
        </div>
      ))}
    </div>
  );
}

export default GameResultsTable;






