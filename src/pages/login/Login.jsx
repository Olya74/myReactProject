import {useState ,useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../../components/messages/Error'
import Success from '../../components/messages/Success'
import setMyTimeout from '../../helpers/setMyTimeout'
import '../register/register.css'
import './login.css'
import { UserContext } from '../../contexts/UserContext'


function Login() {
    const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
   const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [myError, setMyError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState('password');

  useEffect(() => {
    if(success){
 setMyTimeout(() => navigate("/"), 3000);
 }
  }, [success]);

  const togglePasswordType = (e) => {
  const input = document.getElementById('loginPassword').getAttribute('type');
    setShowPass((prev)=>   prev==='password' ? 'text':'password');
    
  };

  const submitLogin = async (user)=>{
 try{
   const response = await fetch('http://localhost:5000/login',{
  method:'POST',
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(user)
});
 if (!response.ok) {
        setMyError("User doesn't exists");
        throw new Error(`status: ${response.status}`);
      }
const data = await response.json();
if(!data.user){setMyError('User not found');return;}
 setSuccess(data.message);
     dispatch({ type: "LOG_IN_USER", payload: data.user });
 }catch(error){
   console.error(error);
 }
  }


    return (
      <div className="login">
        {myError && <Error myError={myError} />}
        {success && <Success success={success} />}
        <div className="question">
          You don't have an account?
          <button onClick={(e) => navigate("/register")}>Sign Up</button>
        </div>
        <section>
          <h3>Log in to "Soft world"</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitLogin(login);
            }}
          >
            <label htmlFor="loginEmail">Email:
            <input
              type="email"
              id="loginEmail"
              name={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              required
            />
            </label>
            <label htmlFor="loginPassword" className="passwordShow">
              {" "}
              Password:
              <input
                type={showPass}
                id="loginPassword"
                name={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
                required
                
              />
              <i className="fa-solid fa-eye  showPass" onClick={togglePasswordType}></i>
            </label>
            <button>Log In</button>
          </form>
        </section>
      </div>
    );
    
}

export default Login
