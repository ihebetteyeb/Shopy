import React, { useEffect, useState } from "react";
import GlobalLayout from "../../components/Layouts/GlobalLayout";
import { useOrdersQuery } from "../../store/state/orderApiSlice";

export const Order = () => {
  const { data, refetch } = useOrdersQuery();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  const handleRefetch = () => {
    refetch();
  };

  return (
    <GlobalLayout>
      <div>
        <h1>Orders</h1>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.id} - Status: {order.status} - Payment Method:{" "}
              {order.paymentMethod} - Created At: {order.createdAt}
              {order.orderItems.map((item, index) => (
                <div key={index}>
                  Item: {item.item.name} - Quantity: {item.quantity}
                </div>
              ))}
            </li>
          ))}
        </ul>
        <button onClick={handleRefetch}>Refresh Orders</button>
      </div>
    </GlobalLayout>
  );
};
