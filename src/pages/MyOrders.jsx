
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrders = () => {


  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios.get('https://backend-nine-chi-23.vercel.app/orders')
      .then(res => {
        setMyOrders(res.data);
      }).catch(err => {
        console.error('Error fetching orders:', err);
      })
  }, [])


  const formatDateTime = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid Date';
      
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      });
    } catch (error) {
      return 'Invalid Date';
    }
  };





  return (

    <div className="overflow-x-auto mt-3 md:mt-8">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Phone</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Address</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            myOrders.map((order, index) =>
              <tr key={order._id || index}>
                <th>{index + 1}</th>
                <td>{order?.productName}</td>
                <td>{order?.Phone}</td>
                <td>{order?.quantity}</td>
                <td>{order?.Price}</td>
                <td>{order?.Address}</td>
                <td>{formatDateTime(order?.date)}</td>
              </tr>
            )
          }




        </tbody>
      </table>
    </div>

  );
};

export default MyOrders;