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

  // 나머지 코드는 이전과 동일합니다

  return (
    <div className="centered" style={{ position: 'relative', top: '60px', margin: '0 auto', width: '1300px', marginTop: '200px' }}>
      {gameResults.map((result: GameResult, resultIndex: number) => (
        <div key={resultIndex}>
          <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}
          <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: "-3px" }}>
            <p style={{ textAlign: 'center', margin: '30px 25px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>날짜</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>시간</p>
            <p style={{textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>경기</p>
            <p style={{ textAlign: 'center', margin: '30px', lineHeight: '2px', verticalAlign: 'middle', flex: 1 }}>구장</p>
          </div>
          <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}
          <div style={{ margin: '0 auto', display: 'flex', flexDirection: 'row' }}>
            <div key={resultIndex} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p>{result.date}</p>
              <p>{result.time}</p>
              <p>{result.result}</p>
              <p>{result.stadium}</p>
            </div>
            <hr style={{ width: '1300px', height: '2px', border: '0', backgroundColor: 'green' }} /> {/* 초록색 */}
            </div>
        </div>
      ))}
    </div>
  );
}

export default GameResultsTable;
