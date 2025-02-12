import {useState} from 'react'
import '../register/register.css'
import './login.css'
function Login() {
   const [newUser, setNewUser] = useState({
      email: "",
      password: ""
    });
  
    return (
      <div className="login">
          <div className="question">
            You don't have an account?<button>Sign Up</button>
          </div>
        <section>
          <h3>Log in to "Soft world"</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendUser(newUser);
            }}
          >
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
            <button
              onClick={(e) => {
                dispatch({ type: "ADD_USER", payload: newUser });
              }}
            >
             Log In
            </button>
          </form>
        </section>
      </div>
    );
    
}

export default Login
