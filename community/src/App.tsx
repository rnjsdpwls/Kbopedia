import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "./components/Button/Button";
import Community from "./components/CommunityPage/Community";
import Posting from "./components/CommunityPage/Posting";
import Header from "./components/Header/Header";
import MainPage from "./components/Main/MainPage";

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/Community" element={<Community/>}></Route>
        <Route path="/Posting" element={<Posting/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
