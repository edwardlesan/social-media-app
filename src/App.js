import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./homePage/Home";
import Login from "./loginPage/Login";
import Profile from "./profilePage/Profile";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
