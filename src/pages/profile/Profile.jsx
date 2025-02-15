import {useContext} from 'react'
import { UserContext } from '../../contexts/UserContext'
import './profile.css'
function Profile() {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div className="profile">
        <h3>My Account</h3>
        <p>Name:<b>{state.user.name}</b></p>
        <p>Email: <b>{state.user.email}</b></p>
        <p>My Order</p>
        <p>liked</p>
    </div>
  )
}

export default Profile
