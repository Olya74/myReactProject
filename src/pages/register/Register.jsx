import "./register.css";
import { useState, useEffect,useContext } from "react";
import setMyTimeout from "../../helpers/setMyTimeout";
import Success from "../../components/messages/Success";
import Error from "../../components/messages/Error";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
  const navigate = useNavigate();
  const {dispatch}=useContext(UserContext);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [myError, setMyError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMyError("");
      setSuccess("");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [myError, success]);

  const sendUser = async (user) => {
    const { name, email, password } = user;
    if (!USER_REGEX.test(name)) {
      setMyError("Invalid username");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setMyError("Invalid email");
      return;
    }
    if (!PASSWORD_REGEX.test(password)) {
      setMyError("Invalid password");
      return;
    }
    if (user.password !== confirmPassword) {
      setMyError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        setMyError("User already exists");
        throw new Error(`status: ${response.status}`);
      }
      const data = await response.json();
      if(response.status===201){
       dispatch({ type: "REGISTER", payload: {name:newUser.name,email:newUser.email} });
      }
     
      
     
      setSuccess(data.message);
      setMyTimeout(() => navigate("/"), 2200);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div className="register">
        {myError && <Error myError={myError} />}
        {success && <Success success={success} />}
        <div className="question">
          Have an account?
          <button onClick={(e) => navigate("/login")}>Log in</button>
        </div>
        <section>
          <h2>Create a account</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendUser(newUser);
            }}
          >
            <input id="1" hidden />
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="userName"
              name={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
            <label htmlFor="useremail">Email:</label>
            <input
              type="email"
              id="useremail"
              name={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              required
            />
            <label htmlFor="userpassword">Password:</label>
            <input
              type="text"
              // type="password"
              id="userpassword"
              name={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              required
            />
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="text"
              //  type="password"
              id="confirmPassword"
              name={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="policy">
              <input type="checkbox" /> I agree to the Terms of Service and
              Privacy Policy
            </div>
            <button>Sign Up</button>
          </form>
        </section>
    </div>
  );
}

export default Register;
