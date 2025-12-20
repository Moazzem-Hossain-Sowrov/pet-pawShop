import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const UpdateService = () => {

  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [service, setService] = useState()
  const [category, setCategory] = useState(service?.category)
  const navigation = useNavigate()

  useEffect(() => {
    axios.get(`https://backend-nine-chi-23.vercel.app/services/${id}`)
      .then(res => {
        setService(res.data)
        setCategory(res.data.category)
      })
      
  }, [id])

 


  const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target;

  const name = form.name.value;
  const category = form.category.value;
  const price = parseInt(form.price.value);
  const location = form.location.value;
  const description = form.description.value;
  const image = form.image.value;
  const date = form.date.value;
  const email = form.email.value;

  const formData = {
    name,
    category,
    Price: price,  // MongoDB uses Price (capital P)
    location,
    description,
    image,
    date,
    email,
    createdAt: service?.createdAt,
  };
  
  axios.put(`https://backend-nine-chi-23.vercel.app/update/${id}` ,formData)
  .then(res=>{
    navigation('/my-services')
    
  }).catch(err=>{
    console.error('Error updating service:', err); 
  })
  
  }


  return (
    <div className="max-w-lg mx-auto bg-white p-6 my-10  rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Update Listing</h2>

      <form onSubmit={handleUpdate} className="space-y-4">

        {/* Product / Pet Name */}
        <div>
          <label className="font-medium">Product / Pet Name</label>
          <input
            defaultValue={service?.name}
            type="text"
            name="name"
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-medium">Category</label>
          <select
            value={category}
            onChange={(e) =>setCategory(e.target.value)}
            name="category"
            className="w-full mt-1 p-2 border rounded-md"

            required
          >
            <option value="">Select Category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="font-medium">Price</label>
          <input
          defaultValue={service?.Price}
            type="number"
            name="price"
            className="w-full mt-1 p-2 border rounded-md"

            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="font-medium">Location</label>
          <input
          defaultValue={service?.location}
            type="text"
            name="location"
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium">Description</label>
          <textarea
          defaultValue={service?.description}
            rows="4"
            name="description"
            className="w-full mt-1 p-2 border rounded-md"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="font-medium">Image URL</label>
          <input
          defaultValue={service?.image}
            type="url"
            name="image"
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Pick-Up Date */}
        <div>
          <label className="font-medium">Pick-Up Date</label>
          <input
          defaultValue={service?.date}
            type="date"
            name="date"
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-medium">Email</label>
          <input
            value={user?.email}
            type="email"
            name="email"
            readOnly
            className="w-full mt-1 p-2 border rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          name="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
         Update
        </button>
      </form>
    </div>
  );
}


export default UpdateService;