import { Route, Routes } from "react-router-dom";
import GlobalHeader from './components/Header/GlobalHeader';
import GlobalFooter from "./components/Footer/GlobalFooter";
import Community from "./components/pages/CommunityPage/Community";
import Login from "./components/pages/login/Login";
import Quiz from "./components/pages/Quiz/Quiz";
import Posting from "./components/pages/Posting/Posting";
import MainPage from './components/pages/MainPage/MainPage';
import TeamInfo from "./components/pages/TeamInfoPage/TeamInfo";
import TeamItems from "./components/pages/TeamInfoPage/TeamItems";
import Dict from "./components/pages/DictPage/Dict";
import MainInfo from "./components/pages/MainPage/components/MainInfo";
import Content from "./components/pages/CommunityPage/Content";
import GameResultsTable from './components/pages/Schedule/GameResultsTable';

function App() {
  return (
    <div className="App">
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Community" element={<Community />}></Route>
        <Route path="/Content/:id" element={<Content />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="/Posting" element={<Posting />}></Route>
        <Route path="/MainInfo" element={<MainInfo />}></Route>
        <Route path="/TeamInfo" element={<TeamInfo newId={1} />} />
        <Route path="/TeamItems/:id" element={<TeamItems />} />
        <Route path="/Dict" element={<Dict />}></Route>
        <Route path="/GlobalFooter" element={<GlobalFooter />}></Route>
        <Route path="/GameResultsTable" element={<GameResultsTable />} />
      </Routes>
    </div >
  );
}

export default App;
