import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeader from './components/Header/GlobalHeader';
import Community from "./components/pages/CommunityPage/Community";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/SignupId";
import Quiz from "./components/pages/Quiz/Quiz";
import Posting from "./components/pages/Posting/Posting";
import Bears from "./components/pages/TeamBoard/Bears";
import Heroes from "./components/pages/TeamBoard/Heroes";
import Dinos from "./components/pages/TeamBoard/Dinos";
import Landers from "./components/pages/TeamBoard/Landers";
import Twins from "./components/pages/TeamBoard/Twins";
import Tigers from "./components/pages/TeamBoard/Tigers";
import Giants from "./components/pages/TeamBoard/Giants";
import Lions from "./components/pages/TeamBoard/Lions";
import Eagles from "./components/pages/TeamBoard/Eagles";
import Wiz from "./components/pages/TeamBoard/Wiz";
import MainPage from './components/pages/MainPage/MainPage';
import TeamInfo from "./components/pages/TeamInfoPage/TeamInfo";
import TeamItems from "./components/pages/TeamInfoPage/TeamItems";
import Dict from "./components/pages/DictPage/Dict";
import Schedule from "./components/pages/SchedulePage/Schedule";

function App() {
  return (
    <div className="App">
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Community" element={<Community />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="/Posting" element={<Posting />}></Route>
        <Route path="/Heroes" element={<Heroes />}></Route>
        <Route path="/Bears" element={<Bears />}></Route>
        <Route path="/Dinos" element={<Dinos />}></Route>
        <Route path="/Landers" element={<Landers />}></Route>
        <Route path="/Twins" element={<Twins />}></Route>
        <Route path="/Tigers" element={<Tigers />}></Route>
        <Route path="/Giants" element={<Giants />}></Route>
        <Route path="/Lions" element={<Lions />}></Route>
        <Route path="/Eagles" element={<Eagles />}></Route>
        <Route path="/Wiz" element={<Wiz />}></Route>
        <Route path="/TeamInfo" element={<TeamInfo newId={1} />} />
        <Route path="/TeamItems" element={<TeamItems newId={1} />} />
        <Route path="/Dict" element={<Dict />}></Route>
        <Route path="/Schedule" element={<Schedule />}></Route>
      </Routes>
    </div >
  );
}

export default App;
