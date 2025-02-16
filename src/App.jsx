import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Layout from "./components/Layout/Layout";
import UserList from "./pages/users/UserList";
import About from "./pages/About";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="about" element={<About/>} />
    
          <Route path="users">
          <Route index element={<UserList/>} />
          <Route path=":userId" element={<Profile/>} />
          </Route>
        <Route path="/category" element={<h1>Category</h1>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
