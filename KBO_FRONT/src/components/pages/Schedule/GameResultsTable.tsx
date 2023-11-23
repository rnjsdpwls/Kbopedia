import React from 'react';
import gameResultsData from '../../../db/gameResults.json';

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
          <p style={{ textAlign: 'center', margin: '30px 25px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>날짜</p>
          <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>시간</p>
          <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>경기</p>
          <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>구장</p>
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
              <p style={{ textAlign: 'center', margin: '30px', verticalAlign: 'middle', flex: 1 }}>{result.date}</p>
              <p style={{ textAlign: 'center', margin: '30px', verticalAlign: 'middle', flex: 1 }}>{result.time}</p>
              <p style={{ textAlign: 'center', margin: '30px', verticalAlign: 'middle', flex: 1 }}>{`${result.team1} ${result.score1} vs ${result.team2} ${result.score2}`}</p>
              <p style={{ textAlign: 'center', margin: '30px', verticalAlign: 'middle', flex: 1 }}>{result.stadium}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameResultsTable;



