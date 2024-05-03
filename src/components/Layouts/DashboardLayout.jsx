import React from "react";
import Header from "../header/header";
import SideBar from "../sideBar/sideBar";

function DashboardLayout({ children, changeChildren }) {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 pt-4 p-4">
        <div className="col-span-1">
          <SideBar changeChildren={changeChildren}></SideBar>
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
