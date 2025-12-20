import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react"

const Services = () => {

  const [Services, setServices] = useState([]);
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const url = category 
      ? `https://backend-nine-chi-23.vercel.app/services?category=${encodeURIComponent(category)}`
      : `https://backend-nine-chi-23.vercel.app/services`;
    
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to fetch services: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        // Ensure data is an array
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
          setError('Invalid data format received from server');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching services:', err);
        setError(err.message);
        setServices([]);
        setLoading(false);
      })

  }, [category])
  


  return (

    <div className="lg:px-[120px] sm:px-5 px-10">
      <select onChange={(e)=> setCategory(e.target.value)} defaultValue="Choose Category" className="select mt-6">
        <option disabled={true}>Choose Category</option>
        <option value=''>All</option>
        <option value="Pets">Pets</option>
        <option value="Food">Food</option>
        <option value="Accessories">Accessories</option>
        <option value="Care products">Care products</option>
      </select>
      
      {loading && (
        <div className="flex justify-center items-center my-10">
          <span className="loading loading-spinner loading-lg"></span>
          <p className="ml-4">Loading services...</p>
        </div>
      )}
      
      {error && (
        <div className="alert alert-error my-6">
          <span>Error: {error}</span>
        </div>
      )}
      
      {!loading && !error && Services.length === 0 && (
        <div className="alert alert-info my-6">
          <span>No services found. Try selecting a different category.</span>
        </div>
      )}
      
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-6">
        {
          Services.map(service =>
            <motion.div key={service._id} initial={{ scale: 0 }} animate={{
              scale: 1,
              transition: { duration: 1 }
            }} className="card bg-base-100 shadow-md w-full sm:w-full">
              <figure>
                <img className="w-full h-[300px] object-cover sm:h-64"
                  src={service?.image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service?.name}</h2>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p>Category: {service?.category}</p>
                    <p>Price: {service?.Price}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Location: {service?.location}</p>
                    <p>Date: {service?.date}</p>
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <Link to={`/details/${service?._id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
              </div>
            </motion.div>

          )
        }
      </div>

    </div>
  );
};

export default Services;