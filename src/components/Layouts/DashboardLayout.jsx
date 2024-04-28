import React from "react";
import Header from "../header/header";
import SideBar from "../sideBar/sideBar";

function DashboardLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-5 gap-4 pt-4 p-4">
        <div className="col-span-1">
          <SideBar></SideBar>
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
