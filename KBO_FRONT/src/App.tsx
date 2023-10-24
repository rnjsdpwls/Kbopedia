import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "./components/pages/CommunityPage/Community";
import Posting from "./components/pages/Posting/Posting";
import Header from "./components/Header/Header";
import MainPage from "./components/pages/Main/MainPage";
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

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/Community" element={<Community/>}></Route>
        <Route path="/Posting" element={<Posting/>}></Route>
        {/* <Route path="/Post_Demo" element={<Post_Demo/>}></Route> */}

        <Route path="/Heroes" element={<Heroes/>}></Route>
        <Route path="/Bears" element={<Bears/>}></Route>
        <Route path="/Dinos" element={<Dinos/>}></Route>
        <Route path="/Landers" element={<Landers/>}></Route>
        <Route path="/Twins" element={<Twins/>}></Route>
        <Route path="/Tigers" element={<Tigers/>}></Route>
        <Route path="/Giants" element={<Giants/>}></Route>
        <Route path="/Lions" element={<Lions/>}></Route>
        <Route path="/Eagles" element={<Eagles/>}></Route>
        <Route path="/Wiz" element={<Wiz/>}></Route>

        <Route path="/Create_Demo" element={<Create_Demo/>}></Route>


      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
