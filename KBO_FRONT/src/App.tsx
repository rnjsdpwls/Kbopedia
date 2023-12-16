import { Navigate, Route, Routes } from "react-router-dom";
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
import UserProfile from "./components/pages/login/LoginComponent";
import { RecoilRoot } from "recoil";

function App() {
  const isLoggedIn = localStorage.getItem('access_token') !== null;
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
        <Route path="/Posting" element={isLoggedIn ? <Posting /> : <Navigate to= "/Login" />}></Route>
        <Route path="/MainInfo" element={<MainInfo />}></Route>
        <Route path="/TeamInfo" element={<TeamInfo newId={1} />} />
        <Route path="/TeamItems/:id" element={<TeamItems />} />
        <Route path="/Dict" element={<Dict />}></Route>
        <Route path="/GlobalFooter" element={<GlobalFooter />}></Route>
      </Routes>
    </div >
    </RecoilRoot>
  );
}

export default App;
