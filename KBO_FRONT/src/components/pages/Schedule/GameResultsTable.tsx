import React from 'react';
import gameResultsData from '../../../db/gameResults.json';
import { CellA, CellB, CellC, CellE} from './GameResultsTableA';
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
      <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} />

      {/* Header Row */}
      {!headerDisplayed && (
        <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row' }}>
          <CellA>날짜</CellA>
          <CellB>시간</CellB>
          <CellB>경기</CellB>
          <CellB>구장</CellB>
        </div>
      )}

      {/* Set the headerDisplayed flag to true after displaying the header */}
      {!headerDisplayed && (headerDisplayed = true)}

      <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} />

      {/* Results */}
      {gameResults.map((result: GameResult, resultIndex: number) => (
        <div key={resultIndex}>
          <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row' }}>
            <div key={resultIndex} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>{result.date}</p>
            </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column'}}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <CellC>{result.time}</CellC>
          <CellE>{`${result.team1} ${result.score1} vs ${result.team2} ${result.score2}`}</CellE>
          <CellE>{result.stadium}</CellE>
          </div> 

          <hr style={{ width: '1000px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <CellC>{result.time}</CellC>
          <CellE>{`${result.team1} ${result.score1} vs ${result.team2} ${result.score2}`}</CellE>
          <CellE>{result.stadium}</CellE>
           </div>
          </div>
        </div>

        <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}

     

  
  </div> 
 
 ))}
    </div>
   
  );
}

export default GameResultsTable;


