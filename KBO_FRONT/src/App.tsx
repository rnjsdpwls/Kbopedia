import { Navigate, Route, Routes } from "react-router-dom";
import {RecoilRoot} from 'recoil'
import GlobalHeader from './components/Header/GlobalHeader';
import GlobalFooter from "./components/Footer/GlobalFooter";
import Community from "./components/pages/CommunityPage/Community";
import Login from "./components/pages/login/Login";
import Quiz from "./components/pages/Quiz/Quiz";
import QuizList from "./components/pages/Quiz/QuizList";
import QuizPage from "./components/pages/Quiz/QuizPage";
import Posting from "./components/pages/Posting/Posting";
import MainPage from './components/pages/MainPage/MainPage';
import TeamInfo from "./components/pages/TeamInfoPage/TeamInfo";
import TeamItems from "./components/pages/TeamInfoPage/TeamItems";
import Dict from "./components/pages/DictPage/Dict";
import MainInfo from "./components/pages/MainPage/components/MainInfo";
import Content from "./components/pages/CommunityPage/Content";
import GameResultsTable from './components/pages/Schedule/GameResultsTable';
import CheerPage from "./components/pages/TeamInfoPage/CheerPage/CheerPage";
import UserProfile from "./components/pages/login/LoginComponent";


function App() {
  const isLoggedIn = localStorage.getItem('code') !== null;

  return (
    <RecoilRoot>

      <div className="App">
        <GlobalHeader />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/Community" element={<Community />}></Route>
          <Route path="/Content/:id" element={<Content />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/LoginComponent" element={<UserProfile />}></Route>
          <Route path="/Quiz" element={<Quiz />}></Route>
          <Route path="/Quiz/:id" element={<Quiz/>} />
          <Route path="/QuizPage" element={<QuizPage />}></Route>
          <Route path="/quiz/basic" element={<QuizList level="quizbasic" />} />
          <Route path="/quiz/deep" element={<QuizList level="quizdeep" />} />
          <Route path="/Posting" element={isLoggedIn ? <Posting /> : <Navigate to="/Login" />}></Route>
          <Route path="/MainInfo" element={<MainInfo />}></Route>
          <Route path="/TeamInfo" element={<TeamInfo newId={1} />} />
          <Route path="/TeamItems/:id" element={<TeamItems />} />
          <Route path="/TeamItems/:id/cheers" element={<CheerPage />} />
          <Route path="/Dict" element={<Dict />}></Route>
          <Route path="/GlobalFooter" element={<GlobalFooter />}></Route>
          <Route path="/GameResultsTable" element={<GameResultsTable />} />
        </Routes>
      </div >
    </RecoilRoot>
  );
}

export default App;