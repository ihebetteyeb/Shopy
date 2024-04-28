import React from "react";
import ItemList from "../../components/itemsList/itemList";
import CardStats from "../../components/card/cardStats";
import MultiAxisChart from "../../components/charts/mutliAxisChart";
import { ItemStats } from "../../components/itemsStats/itemStats";
import { CardNotification } from "../../components/card/cardNotification";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import Products from "../../components/products/products";

const dash = (
  <div className="grid grid-cols-4 gap-5 w-full">
    <CardStats title={"Orders"} logo={"shopping-cart"}></CardStats>
    <CardStats title={"Revenue"} logo={"dollar"}></CardStats>
    <CardStats title={"Customers"} logo={"users"}></CardStats>
    <CardStats title={"Comments"} logo={"inbox"}></CardStats>
    <div className="col-span-2">
      <ItemList></ItemList>
    </div>
    <div className="col-span-2">
      <MultiAxisChart></MultiAxisChart>
    </div>
    <div className="col-span-2">
      <ItemStats></ItemStats>
    </div>
    <div className="col-span-2">
      <CardNotification></CardNotification>
    </div>
  </div>
);

const products = <Products></Products>;

const Dashboard = () => {
  return <DashboardLayout children={products}></DashboardLayout>;
};

export default Dashboard;
