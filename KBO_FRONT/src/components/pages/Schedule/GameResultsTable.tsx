import React from 'react';
import gameResultsData from '../../../db/gameResults.json'; // 상대 경로를 적절하게 조정

interface GameResult {
  date: string;
  time: string;
  result: string;
  stadium: string;
  

}
function GameResultsTable() {
  const gameResults = gameResultsData.gameResults;



  return (
    <div className="centered" style={{ position: 'relative', top: '60px', margin: '0 auto', width: '1300px', marginTop: '200px' }}>
      {gameResults.map((result: GameResult, resultIndex: number) => (
        <div key={resultIndex}>
          <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}
          <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: "-3px" }}>
            <p style={{ textAlign: 'center', margin: '30px 25px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>날짜</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>시간</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>경기</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>구장</p>
          </div>
          <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}
          <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row' }}>
            <div key={resultIndex} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ textAlign: 'center', margin: '30px',  verticalAlign: 'middle', flex: 1 }}>{result.date}</p>
              <p style={{ textAlign: 'center', margin: '30px',  verticalAlign: 'middle', flex: 1 }}>{result.time}</p>
              <p style={{ textAlign: 'center', margin: '30px',  verticalAlign: 'middle', flex: 1 }}>{result.result}</p>
              <p style={{ textAlign: 'center', margin: '30px',  verticalAlign: 'middle', flex: 1 }}>{result.stadium}</p>
            </div>
            
            </div>
        </div>
      ))}
    </div>
  );
}

export default GameResultsTable;
