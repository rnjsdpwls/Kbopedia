import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "./components/pages/CommunityPage/Community";
import Posting from "./components/pages/Posting/Posting";
import Header from "./components/Header/Header";
import MainPage from "./components/pages/Main/MainPage";
import Post_Demo from "./components/pages/Posting/Post_Demo";
import Heroes from "./components/pages/TeamBoard/Heroes";

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/Community" element={<Community/>}></Route>
        <Route path="/Posting" element={<Posting/>}></Route>
        <Route path="/Post_Demo" element={<Post_Demo/>}></Route>
        <Route path="/TeamBoard/Heroes" element={<Heroes/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
