import { Navigate } from "react-router-dom";
import NotFound from "../pages/404/404";
import homeConfig from "../pages/home/home.config";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";
import Footer from "../components/footer/footer";
import signinConfig from "../pages/Auth/login/signin.config";


const routeConfigs = [homeConfig, signinConfig];

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
