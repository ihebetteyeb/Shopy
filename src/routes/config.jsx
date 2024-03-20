import { Navigate } from "react-router-dom";
import NotFound from "../pages/404/404";
import homeConfig from "../pages/home/home.config";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";

const routeConfigs = [homeConfig];

const routes = [
  ...routeConfigs,
  {
    path: "404",
    element: <NotFound />,
    public: true,
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
export default routes;
