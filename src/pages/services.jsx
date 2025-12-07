import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react"

const Services = () => {

  const [Services, setServices] = useState([]);
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3000/services?category=${category}`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err))

  }, [category])

  console.log(category);
  


  return (

    <div className="lg:px-[120px] sm:px-5 px-10">
      <select onChange={(e)=> setCategory(e.target.value)} defaultValue="Choose Category" className="select mt-6">
        <option disabled={true}>Choose Category</option>
        <option value=''>All</option>
        <option>Pets</option>
        <option>Food</option>
        <option>Accessories</option>
        <option>Care products</option>
      </select>
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
                    <p>Price: {service?.price}</p>
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