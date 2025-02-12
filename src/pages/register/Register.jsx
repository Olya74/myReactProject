import "./register.css";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Register() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    isLogined: false,
  });

  const sendUser = async (user) => {
    const url = "http://localhost:5000/register";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Server Response:", data); 
    } catch (error) {
      console.error("This email already exists", error);
    }
  };

  return (
    <div className="register">
        <div className="question">
          Have an account?<button>Log in</button>
        </div>
      <section>
        <h2>Create a account</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendUser(newUser);
          }}
        >
          <input id="1" hidden/>
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
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
          <label htmlFor="userpassword">Password:</label>
          <input
            type="password"
            id="userpassword"
            name={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            required
          />
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            required
          />
          <div className="policy">
            <input type="checkbox" /> I agree to the Terms of Service and
            Privacy Policy
          </div>
          <button
            onClick={(e) => {
              dispatch({ type: "ADD_USER", payload: newUser });
            }}
          >
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
}

export default Register;
