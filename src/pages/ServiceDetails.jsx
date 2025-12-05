import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import servicesData from "../../public/services.json";

const ServiceDetails = () => {

  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(null);

  const { myId } = useParams()

  useEffect(() => {
    setServices(servicesData);
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      const result = services.find(service => service.serviceId == myId);
      setServiceDetails(result);
    }
  }, [myId, services]);

  return (
  <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
    {serviceDetails && (
      <>
        <img
          src={serviceDetails.image}
          alt={serviceDetails.serviceName}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        <h1 className="text-3xl font-bold mb-3">
          {serviceDetails.serviceName}
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          {serviceDetails.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-semibold">
            <span className="text-blue-600">Price:</span> ${serviceDetails.price}
          </p>

          <p className="text-lg font-semibold">
            <i class="fa-regular fa-star"></i> {serviceDetails.rating}
          </p>
        </div>

        <p className="mt-3 text-sm text-gray-600">
          Provider: <span className="font-medium">{serviceDetails.providerName}</span>
        </p>

        <p className="text-sm text-gray-600 mb-6">
          Email: {serviceDetails.providerEmail}
        </p>
      </>
    )}
  </div>
);

};
export default ServiceDetails;