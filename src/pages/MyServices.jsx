import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import axios from "axios";

const MyServices = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-services?email=${user.email}`)
      .then(res => res.json())
      .then(data => setMyServices(data))
      .catch(err => console.log(err));
  }, [user?.email]);

const handleDelete = (id)=>{
  axios.delete(`http://localhost:3000/delete/${id}`)
  .then(res =>{
    console.log(res.data); 
  }).catch(err =>{
    console.log(err);
    
  })
}


  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Services
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
        <table className="table">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="text-sm">Service</th>
              <th className="text-sm">Description</th>
              <th className="text-sm">Price</th>
              <th className="text-sm text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {myServices.map(service => (
              <tr key={service._id} className="hover:bg-gray-100 transition">
                
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-14 w-14">
                        <img src={service?.image} alt="service" />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {service?.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {service?.category || "General Service"}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="max-w-sm text-gray-600">
                  {service?.description?.slice(0, 60)}...
                </td>

                <td className="font-semibold text-blue-600">
                  ${service?.price}
                </td>

                <td className="flex gap-3 justify-center">
                  <Link to={`/update-services/${service?._id}`}><button className="btn btn-primary btn-xs rounded-md px-4">
                    Edit
                  </button></Link>
                  <button onClick={() =>handleDelete(service?._id)} className="btn btn-error btn-xs rounded-md px-4">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyServices;
