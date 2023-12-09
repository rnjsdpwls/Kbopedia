import React from 'react';
import gameResultsData from '../../../db/gameResults.json';
import { TimeA, Same, Time, Above, TeamandScore, CellD, Hline, HrB} from './GameResultsTableA';
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
          <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row' }}>
            <div key={resultIndex} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>{result.date}</p>
            </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column'}}>
          <CellD>
            <Time>{result.time}</Time>
            <TeamandScore>{`${result.team1} ${result.score1} vs ${result.team2} ${result.score2}`}</TeamandScore>
           <TeamandScore>{result.stadium}</TeamandScore>
          </CellD> 

          <HrB></HrB>   {/* 초록색 */}

          <CellD>
            <Time>{result.time}</Time>
            <TeamandScore>{`${result.team1} ${result.score1} vs ${result.team2} ${result.score2}`}</TeamandScore>
            <TeamandScore>{result.stadium}</TeamandScore>
          </CellD>
          </div>
        </div>

    <Hline></Hline>

     

  
  </div> 
 
 ))}
    </div>
   
  );
}

export default GameResultsTable;


