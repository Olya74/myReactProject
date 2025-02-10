import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Register from "./pages/register/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="about" element={<h1>About</h1>} />
        </Route>
        <Route path="users" >
          <Route index element={<h1>Users Index</h1>} />
          <Route path=":userId" element={<h1>User Details</h1>} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
