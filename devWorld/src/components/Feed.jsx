import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BASE_URL} from "../utils/constants"
import {addFeed} from '../utils/feedSlice'
import UserCard from './userCard';

const Feed = () => {
  const feed=useSelector((store)=>store.feed);
  // console.log(feed);
  
  const dispatch=useDispatch();


  const getFeed=async()=>{
    if(feed) return;
     try{
      const res=await axios.get(BASE_URL + "/feed",{withCredentials:true});
        // console.log("res",res.data.users);

     dispatch(addFeed(res.data));
     }catch(err){

     }
  };
  useEffect(()=>{
    getFeed();
  },[]);
  return (
  feed && (
    <div className="">
      {feed?.users?.map((u) => (
        <UserCard key={u._id} user={u} />
      ))}
    </div>
  )
);
}

export default Feed
