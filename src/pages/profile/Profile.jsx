import {useContext} from 'react'
import { UserContext } from '../../contexts/UserContext'
import './profile.css'


function Profile() {
  const { state} = useContext(UserContext);
  return (
    <div className="profileContainer">
      <div className="profile">
        <h2>My Account</h2>
        <p>
          Name:<b>{state.user.name}</b>
        </p>
        <p>
          Email: <b>{state.user.email}</b>
        </p>
        <p>My Order</p>
        <p>liked</p>
      </div>
    </div>
  );
}

export default Profile
