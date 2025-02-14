import {useState ,useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../../components/messages/Error'
import Success from '../../components/messages/Success'
import setMyTimeout from '../../helpers/setMyTimeout'
import '../register/register.css'
import './login.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
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

  useEffect(() => {
    if(success){
 setMyTimeout(() => navigate("/"), 3000);
 }
  }, [success]);

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
 setSuccess(data.message);
 data.user.isLoggined=true;
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
            You don't have an account?<button onClick={(e)=>navigate('/register')}>Sign Up</button>
          </div>
          <section>
            <h3>Log in to "Soft world"</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitLogin(login);
              }}
            >
              <label htmlFor="loginEmail">Email:</label>
              <input
                type="email"
                id="loginEmail"
                name={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                required
              />
              <label htmlFor="loginPassword">Password:</label>
              <input
                type="password"
                id="loginPassword"
                name={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
                required
              />
              <button
              >
                Log In
              </button>
            </form>
          </section>
      </div>
    );
    
}

export default Login
