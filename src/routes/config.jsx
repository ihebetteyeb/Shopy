import { Navigate } from "react-router-dom";
import NotFound from "../pages/404/404";
import homeConfig from "../pages/home/home.config";

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
    element: <Navigate to="404" replace />,
  },
];
export default routes;
