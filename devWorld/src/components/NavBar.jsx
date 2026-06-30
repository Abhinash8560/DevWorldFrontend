import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { removeUser } from '../utils/userSlice';

const NavBar = () => {
  const Navigate=useNavigate();
const user = useSelector((store) => store.user);
const dispatch=useDispatch();

const handleLogout=async()=>{
try{
const res=await axios.post(BASE_URL + "/logout",{},
{withCredentials:true
});
dispatch(removeUser());
return Navigate("/login");
}
catch(err){
  console.log(err);
  
}
}
  return (
    <>
          <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">👨🏻‍💻 DevWorld</Link>
  </div>
  <div className="flex gap-2">

  { user && (
   <div className="dropdown dropdown-end mx-5">
    <span className='px-4'>Welcome, {user.firstname}</span>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User Pic"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  border-zinc-200 bg-zinc-50 text-zinc-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to='/connections'> Connections</Link></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>)}
  </div>
</div>
    </>
  )
}

export default NavBar
