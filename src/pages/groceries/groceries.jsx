import React, { useEffect } from "react";
import GlobalLayout from "../../components/Layouts/GlobalLayout.jsx";
import "./groceries.css";
import DataViewer from "../../components/dataViewer/dataViewer.jsx";
import { usePendingOrderQuery } from "../../store/state/userApiSlice";
import { ProgressSpinner } from "primereact/progressspinner";

function Groceries() {
  const { data } = usePendingOrderQuery({ userId: 1 });
  const [order, setOrder] = React.useState({ id: undefined, cartItems: [] });
  useEffect(() => {
    if (!data || !data.id || !data.orderItems) return;
    setOrder({
      id: data.id,
      cartItems: data.orderItems.map((orderItem) => ({
        ...orderItem.item,
        _quantity: orderItem.quantity,
      })),
    });
  }, [data, setOrder]);
  return (
    <>
      {!order.id && <ProgressSpinner />}
      {order.id && (
        <GlobalLayout order={order} setOrder={setOrder}>
          <DataViewer setOrder={setOrder} orderId={order.id}></DataViewer>
        </GlobalLayout>
      )}
    </>
  );
}

export default Groceries;
