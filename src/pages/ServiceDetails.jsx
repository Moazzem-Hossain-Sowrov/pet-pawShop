import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const ServiceDetails = () => {

  const [service, setService] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(null);
  const { myId } = useParams();
  const { user } = useContext(AuthContext)


  useEffect(() => {
    fetch(`backend-nine-chi-23.vercel.app/services/${myId}`)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data))
      .catch((err) => console.error("Error loading services:", err));
  }, [myId]);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value
    const buyerName = form.buyerName.value
    const Price = parseInt(form.Price.value)
    const buyerEmail = form.buyerEmail.value
    const quantity = parseInt(form.quantity.value)
    const Address = form.Address.value
    const Phone = form.Phone.value
    const Note = form.Note.value

    const formData = {
      productId:myId,
      productName,
      buyerName,
      Price,
      buyerEmail,
      quantity,
      Address,
      Phone,
      Note,
      date: new Date(),
    }

    axios.post('backend-nine-chi-23.vercel.app/orders',formData)
    .then(res =>{
      console.log(res);
      
    }).catch(err=>{
      console.log(err);
      
    })


  }



  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md my-8">
      {serviceDetails && (
        <>
          <img
            src={serviceDetails.image}
            alt={serviceDetails.name}
            className="w-full h-64 object-cover rounded-md mb-6"
          />

          <h1 className="text-3xl font-bold mb-3">
            {serviceDetails.name}
          </h1>

          <p className="text-gray-700 text-lg mb-4">
            {serviceDetails.description}
          </p>

          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold">
              <span className="text-blue-600">Price:</span> ${serviceDetails.Price}
            </p>

            <p className="text-lg font-semibold">
              📍 {serviceDetails.location}
            </p>
          </div>

          <p className="mt-3 text-md text-gray-700">
            Category: <span className="font-medium">{serviceDetails.category}</span>
          </p>

          <p className="text-md text-gray-700">
            Email: <span className="font-medium">{serviceDetails.email}</span>
          </p>

          <p className="text-sm text-gray-600 mt-2">
            Posted on: {serviceDetails.date}
          </p>
        </>
      )}


      {/* Modal  */}
      <button className="btn btn-primary mt-3" onClick={() => document.getElementById('my_modal_3').showModal()}>Adopt/Order</button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {/* form */}
          <form onSubmit={handleOrder} className="bg-base-200 border border-base-300 rounded-2xl p-6 w-full max-w-lg mx-auto shadow-lg">
            <legend className="text-2xl font-semibold px-2">Order Details</legend>

            <div className="flex flex-col gap-5 mt-3">

              {/* Product Name */}
              <div className="form-control">
                <label className="label font-medium">Product Name</label>
                <input
                  name="productName"
                  defaultValue={serviceDetails?.name}
                  readOnly
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Product Name.."
                />
              </div>

              {/* Buyer Name */}
              <div className="form-control">
                <label className="label font-medium">Buyer Name</label>
                <input
                  name="buyerName"
                  defaultValue={user?.displayName}
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your Name.."
                />
              </div>

              {/* Buyer Email */}
              <div className="form-control">
                <label className="label font-medium">Buyer Email</label>
                <input
                  name="buyerEmail"
                  type="email"
                  className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your Email.."
                  defaultValue={user?.email}
                  readOnly
                />
              </div>

              {/* Quantity & Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label font-medium">Quantity</label>
                  <input
                    required
                    name="quantity"
                    type="number"
                    className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Product Quantity"
                  />
                </div>

                <div className="form-control">
                  <label className="label font-medium">Price</label>
                  <input
                    name="Price"
                    type="number"
                    className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Price"
                    defaultValue={serviceDetails?.Price}
                    readOnly
                  />
                </div>
              </div>

              {/* Address */}
              <div className="form-control">
                <label className="label font-medium">Address</label>
                <input
                  required
                  name="Address"
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your Address.."
                />
              </div>

              {/* Phone */}
              <div className="form-control">
                <label className="label font-medium">Phone</label>
                <input
                  required
                  name="Phone"
                  type="text"
                  className="input input-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your Number"
                />
              </div>

              {/* Additional Note */}
              <div className="form-control">
                <label className="label font-medium">Additional Note</label>
                <textarea
                  name="Note"
                  className="textarea textarea-bordered w-full focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Additional Note"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full py-2 text-lg font-medium shadow-md"
              >
                Place Order
              </button>

            </div>
          </form>



        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
