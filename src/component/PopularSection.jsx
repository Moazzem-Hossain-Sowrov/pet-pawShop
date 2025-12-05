import React, { useEffect, useState } from "react";


const PopularSection = () => {


   const [Services, setServices] = useState([]);

   useEffect(() => {
      fetch('./services.json')
         .then(res => res.json())
         .then(data => setServices(data))
         .catch(err => console.log(err))

   }, [])







   return (
      <div className="lg:px-[120px] sm:px-5 px-10">
  <div>
    <h3 className="font-bold text-2xl md:text-4xl text-center p-6">
      Popular Winter Care Service
    </h3>
  </div>

  <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
    {Services.slice(0, 6).map((service) => (
      <div key={service.serviceId} className="card bg-base-100 shadow-md w-full sm:w-full">
        <figure>
          <img
            className="w-full h-[300px] sm:h-64 object-cover"
            src={service?.image}
            alt={service?.serviceName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service?.serviceName}</h2>
          <div className="flex justify-between">
            <p>Price: {service?.price}</p>
            <p>Rating: {service?.rating}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

   );
};

export default PopularSection;