import "./register.css";
import { useState, useEffect, useContext } from "react";
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
  const { dispatch } = useContext(UserContext);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [myError, setMyError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState("password");
  const [showConfirmPass, setShowConfirmPass] = useState("password");
  const togglePasswordType = (e) => {
    const el = e.target.previousElementSibling;
    console.log(el);
    if (el.id === "userpassword") {
      setShowPass((prev) => (prev === "password" ? "text" : "password"));
    } else if (el.id === "confirmPassword") {
      setShowConfirmPass((prev) => (prev === "password" ? "text" : "password"));
    } else {
      return;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMyError("");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [myError]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccess("");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [success]);

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
      if (response.status === 201) {
        dispatch({
          type: "REGISTER",
          payload: { name: newUser.name, email: newUser.email },
        });
      }

      setSuccess(data.message);
      setMyTimeout(() => navigate("/"), 2000);
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
        <section className="registerForm">
          <h2>Create a account</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendUser(newUser);
            }}
          >
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
            <label htmlFor="userpassword" className="passwordShowReg">
              Password:
            </label>
            <input
              type={showPass}
              id="userpassword"
              name={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              required
            />
            <i
              className="fa-solid fa-eye  showPass1"
              onClick={togglePasswordType}
            ></i>
            <label htmlFor="confirmPassword" className="passwordShowReg">
              {" "}
            </label>
            Confirm Password:
            <input
              type={showConfirmPass}
              id="confirmPassword"
              name={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <i
              className="fa-solid fa-eye  showPass2"
              onClick={togglePasswordType}
            ></i>
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
