import { Navigate } from "react-router-dom";
import NotFound from "../pages/404/404";
import homeConfig from "../pages/home/home.config";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";
import Footer from "../components/footer/footer";
import signinConfig from "../pages/Auth/login/signin.config";
import groceriesConfig from "../pages/groceries/groceries.config";
import dashboardConfig from "../pages/dashboard/dashboard.config";
import productsConfig from "../components/products/products.config";
const routeConfigs = [
  homeConfig,
  signinConfig,
  groceriesConfig,
  dashboardConfig,
  productsConfig,
];

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
