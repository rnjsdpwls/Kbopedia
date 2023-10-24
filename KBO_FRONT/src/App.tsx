import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "./components/pages/CommunityPage/Community";
import Posting from "./components/pages/Posting/Posting";
// import Post_Demo from "./components/pages/Posting/Post_Demo";
import Bears from "./components/pages/TeamBoard/Bears";
import Heroes from "./components/pages/TeamBoard/Heroes";
import Create_Demo from "./components/pages/Posting/Create_Demo";
import Dinos from "./components/pages/TeamBoard/Dinos";
import Landers from "./components/pages/TeamBoard/Landers";
import Twins from "./components/pages/TeamBoard/Twins";
import Tigers from "./components/pages/TeamBoard/Tigers";
import Giants from "./components/pages/TeamBoard/Giants";
import Lions from "./components/pages/TeamBoard/Lions";
import Eagles from "./components/pages/TeamBoard/Eagles";
import Wiz from "./components/pages/TeamBoard/Wiz";
import MainPage from './components/pages/MainPage/MainPage';
import TeamInfo from './components/pages/TeamInfoPage/TeamInfo';
import GlobalHeader, { BtnContainerProps } from './components/Header/GlobalHeader';

function App() {
  const handleSignUpClick = () => {
    alert('signup Clicked!');
  };
  const handleLoginClick = () => {
    alert('login Clicked!');
  };
  const btnContainerProps: BtnContainerProps = {
    onSignUpClick: handleSignUpClick,
    onLoginClick: handleLoginClick
  };
  return (
    <div className="App">
      <GlobalHeader {...btnContainerProps} />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Community" element={<Community />}></Route>
        <Route path="/Posting" element={<Posting />}></Route>
        {/* <Route path="/Post_Demo" element={<Post_Demo/>}></Route> */}
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
        <Route path="/Create_Demo" element={<Create_Demo />}></Route>
        <Route path="/TeamInfo" element={<TeamInfo newId={1} />} />
      </Routes>
    </div>
  );
}

export default App;
