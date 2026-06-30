import React from "react";
export default function UserCard({user}){
    // console.log("fed",user);
    const{firstname,lastname,photoUrl,age,gender,skills,about}=user;
    return (
        <>
<div className="">
   <figure className="text-center flex justify-center">
    <img
      src={photoUrl}
      alt="photoUrl"
      width={160}
      height={160}
      />
  </figure>
<div className="">
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