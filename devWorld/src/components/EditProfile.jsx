import React, { useState } from 'react'
import UserCard from './userCard';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';

const EditProfile = ({user}) => {
    // console.log(user,"editProfile");
    
    // const{firstname}=user.users;
      const dispatch=useDispatch();
      const[showToast,setShowToast]=useState(false);
      const[firstname,setFirstName]=useState(user?.firstname);
      const[lastname,setLastName]=useState(user?.lastname);
      const[age,setAge]=useState(user?.age);
      const[gender,setGender]=useState(user?.gender);
      const[about,setAbout]=useState(user?.about);
      const[photoUrl,setphotoUrl]=useState(user?.photoUrl);
      const[error,setError]=useState("");

     const saveProfile = async()=>{
       try{
                    // console.log("editprofile",res);
         const res=await axios.patch(BASE_URL + "/profile/update",{

            firstname,lastname,photoUrl,age,gender,about
         },{  withCredentials: true}
);
dispatch(addUser(res.data.data))
setShowToast(true);
setTimeout(()=>{
  setShowToast(false)
},3000);
       }
       catch(err){
setError(err.response?.data || "Something went wrong");
       }
     }
    
  return (
    <>
    <div className='flex justify-center my-10'>
  <div className="flex justify-center items-center mx-10 ">
  <div className="card bg-base-300 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title justify-center text-2xl mb-4">
        Edit Profile
      </h2>

      {/* First Name */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">firstName</span>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          className="input input-bordered w-full"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      {/* Last Name */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Last Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          className="input input-bordered w-full"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

            {/* Photo Url */}
    <div className="form-control">
  <label className="label">
    <span className="label-text font-medium">Photo URL:</span>
  </label>

  <input
    type="text"
    className="input input-bordered w-full"
    placeholder="Enter photo URL"
    value={photoUrl}
    onChange={(e) => setphotoUrl(e.target.value)}
  />
</div>

      {/* Age */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Age</span>
        </label>
        <input
          type="number"
          placeholder="Enter Age"
          className="input input-bordered w-full"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      {/* Gender */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Gender</span>
        </label>
        <select
          className="select select-bordered w-full"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* About */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">About</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Write something about yourself..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>

      {/* Button */}
      <div className="card-actions justify-center mt-4">
<button onClick={saveProfile} className="btn btn-neutral hover:shadow-xl">
  Save Profile
</button>
      </div>
    </div>
  </div>
</div>
<UserCard user={{firstname,lastname,photoUrl,age,gender,about} }/>
{showToast && (
  <div className="toast toast-top toast-center">
    <div className="alert alert-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Saved Successfully!</span>
    </div>
  </div>
)}

    </div>

</>
  )
}

export default EditProfile
