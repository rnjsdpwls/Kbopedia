import React from 'react';
import './Schedule.css';
import { Container } from './StyledSchedule';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import ResultPage from './ResultPage/ResultPicture';
interface GameInfo  {
  date: string;
  time: string;
  team1: string;
  score1: number;
  team2: string;
  score2: number;
  stadium: string;
}

const games: GameInfo[] = [
  {
    date: "10월 1일",
    time: "14:00",
    team1: "LG",
    score1: 7,
    team2: "두산",
    score2: 4,
    stadium: "잠실",
  },
  {
    date: "10월 1일",
    time: "14:00",
    team1: "KIA",
    score1: 3,
    team2: "SSG",
    score2: 5,
    stadium: "문학",
  },
  {
    date: "10월 2일",
    time: "14:00",
    team1: "LG",
    score1: 7,
    team2: "두산",
    score2: 4,
    stadium: "잠실",
  },
  {
    date: "10월 2일",
    time: "14:00",
    team1: "KIA",
    score1: 3,
    team2: "SSG",
    score2: 5,
    stadium: "문학",
  },
  {
    date: "10월 2일",
    time: "14:00",
    team1: "LG",
    score1: 7,
    team2: "두산",
    score2: 4,
    stadium: "잠실",
  },
];

const sortedGames = games.sort((a, b) => a.date.localeCompare(b.date));

const App: React.FC = () => {
  return (
    <Container>
        <div className="top-spsp
        right">
          <div className="login-linkA">Login</div>
          <div className="login-linkB">Sign up</div>
        </div>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>날짜</th>
            <th>시간</th>
            <th>팀</th>
            <th>점수</th>
            <th>구장</th>
          </tr>
        </thead>
        <tbody>
          {sortedGames.map((game, index) => (
            <tr key={index}>
              {index === 0 || sortedGames[index - 1].date !== game.date ? (
                <>
                  <td colSpan={2}>{game.date}</td>
                  <td>{game.time}</td>
                </>
              ) : (
                <>
                  <td colSpan={2}></td>
                  <td>{game.time}</td>
                </>
              )}
              <td>{`${game.team1} vs ${game.team2}`}</td>
              <td>{`${game.score1} - ${game.score2}`}</td>
              <td>{game.stadium}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="write-button">경기 일정</div>
    </Container>
  );
};

export default App;