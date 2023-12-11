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

  // Initialize a flag to track whether the header has been displayed
  let headerDisplayed = false;

  return (
    <div className="centered" style={{ position: 'relative', top: '0px', margin: '0 auto', width: '1300px', marginTop: '200px' }}>
      <Hline></Hline>

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

      {/* Results */}
      {gameResults.map((result: GameResult, resultIndex: number) => (
        <div key={resultIndex}>
          <StyledContainerbig>
            <StyleDiv key={resultIndex}>
              <p>{result.date}</p>
            </StyleDiv>
            <StyledContainer>
              <CellD>
                <Time>{result.time}</Time>
                <TeamandScore>{`${result.team1} ${result.score1} vs ${result.team2} ${result.score2}`}</TeamandScore>
                <TeamandScore>{result.stadium}</TeamandScore>
              </CellD>

              <HrB></HrB> {/* 초록색 */}

              {/* Render the content only once for each game */}
            </StyledContainer>
          </StyledContainerbig>

          <Hline></Hline>
        </div>
      ))}
    </div>
  );
}

export default GameResultsTable;




