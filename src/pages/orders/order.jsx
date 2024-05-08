import React, { useEffect, useState } from "react";
import GlobalLayout from "../../components/Layouts/GlobalLayout";
import { useOrdersQuery } from "../../store/state/orderApiSlice";
import { DataTable } from "primereact/datatable";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export const Order = () => {
  const { data, refetch } = useOrdersQuery();
  const [orders, setOrders] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const columns = [
    { field: "status", header: "status" },
    { field: "paymentMethod", header: "Payment method" },
    { field: "createdAt", header: "Created At" },
  ];

  const orderItemTemplate = (data) => {
    return (
      <ul>
        {data.orderItems.map((item, index) => (
          <li key={index}>
            Item: {item.item.name} - Quantity: {item.quantity} - Price :
            {item.item.price * item.quantity} DT
          </li>
        ))}
      </ul>
    );
  };
  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  const handleRefetch = () => {
    refetch();
  };

  const header = (
    <div className="flex item-center justify-end gap-2">
      <Button
        type="button"
        icon="pi pi-refresh"
        rounded
        onClick={() => handleRefetch()}
      />
    </div>
  );

  return (
    <GlobalLayout>
      <h1 className="text-2xl font-bold p-4">Orders</h1>
      <Card className="item-start">
        <DataTable
          value={orders}
          expandedRows={expandedRows}
          header={header}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={orderItemTemplate}
          dataKey="id"
        >
          <Column expander style={{ width: "3em" }} />
          {columns.map((col, i) => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}
        </DataTable>
      </Card>
    </GlobalLayout>
  );
};
