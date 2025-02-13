import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Nav from "./components/Nav/Nav";
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="about" element={<h1>About</h1>} />
        </Route>
        <Route path="users">
          <Route path=":userId" element={<Profile/>} />
        </Route>
        <Route path="/category" element={<h1>Category</h1>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
