import React from "react";
export default function UserCard({user}){
    console.log(user.users);
    const{firstname,lastname,photoUrl,age,gender,skills,about}=user.users[0];
    return (
        <>
<div className="card bg-base-200  w-96 shadow-sm">  <figure>
    <img
      src={user?.users[0]?.photoUrl}
      alt="photoUrl" />
  </figure>
<div className="card-body">
  <h2 className="card-title justify-center">
    {firstname + " " + lastname}
  </h2>

  {age && gender && (
    <p className="text-center">
      {age}, {gender}
    </p>
  )}

  <p className="text-center mx-4">
    {about}
  </p>

  <div className="card-actions justify-center my-4">
  <button className="btn btn-info">
  Ignore
</button>

<button className="btn bg-pink-400 text-black hover:bg-pink-500 border-pink-400">
  Interested
</button>
  </div>
</div>
</div>
        </>
    )
}