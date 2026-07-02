import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../utils/requestSlice';
import { BASE_URL } from '../utils/constants';

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [dispatch]);

  if (!requests) {
    return <h1>Loading...</h1>;
  }

  if (requests.length === 0) {
    return <h1>No Requests</h1>;
  }

  return (
    <div className="flex justify-between flex-col gap-4 justify-center items-center my-10">
      <h3>Connection Requests</h3>
      {requests.map((request) => {
        const { _id, firstname, lastname, email, photoUrl, age, gender, about } = request.fromUserId;
        return (
          <div key={_id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{firstname + " " + lastname}</h2>
               {age && gender && <p>{age+ "," + gender}</p>}
              <p>{about}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary mx-2">Accept</button>
                <button className="btn btn-secondary mx-2">Reject</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
