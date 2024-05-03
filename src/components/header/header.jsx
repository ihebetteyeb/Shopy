import * as React from "react";
import { Menubar } from "primereact/menubar";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/state/userSlice";
import { useNavigate } from "react-router-dom";
import { PrimeIcons } from "primereact/api";
import { Sidebar } from "primereact/sidebar";
import SideBar from "./sideBar";

export default function Header({ order, setOrder }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visibleRight, setVisibleRight] = React.useState(false);
  const items = [
    {
      key: "home",
      label: "Home",
      icon: "pi pi-home",
    },
    {
      key: "groceries",
      label: "Groceries",
      icon: PrimeIcons.SHOPPING_BAG,
      command: () => {
        navigate("/groceries");
      },
    },
  ];

  const start = (
    <img
      alt="logo"
      src="src/assets/logo-no-background.png"
      width="90"
      className="mr-2"
    ></img>
  );
  const items2 = [
    {
      key: "profile",
      label: "Profile",
      items: [
        {
          key: "settings",
          label: "Settings",
          icon: "pi pi-cog",
        },
        {
          key: "logout",
          label: "Logout",
          icon: "pi pi-sign-out",
          command: () => {
            console.log("i clicked on logout");
            dispatch(setCredentials(null));
          },
        },
      ],
    },
  ];
  const menuRight = React.useRef(null);
  const end = (
    <div className="flex justify-center items-center gap-6">
      <a>About</a>

      <a>Contact</a>
      <a
        className="pi pi-shopping-cart p-overlay-badge"
        style={{ fontSize: "1.4rem" }}
        onClick={() => setVisibleRight(true)}
      >
        <Badge value={order.cartItems?.length} severity="success"></Badge>
      </a>
      <Menu
        model={items2}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
      />
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
        className=""
        onClick={(event) => menuRight.current.toggle(event)}
      />
    </div>
  );

  return (
    <>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
        className="h-screen "
      >
        <SideBar
          orderId={order.id}
          cardList={order.cartItems}
          setOrder={setOrder}
        />
      </Sidebar>
    </>
  );
}
