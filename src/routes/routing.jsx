import { Routes, Route } from "react-router-dom";
import routes from "./config";
import { ProtectedRoute } from "./protectedRoute";

function Routing() {
  return (
    <Routes>
      {routes.map((route) => {
        if (route.children) {
          const { path } = route;
          return (
            <Route key={route.path} path={route.path} element={route.element}>
              {route.children.map((childRoute) => (
                <Route
                  key={`${path}${childRoute.path}`}
                  path={childRoute.path}
                  element={childRoute.element}
                />
              ))}
            </Route>
          );
        }
        return (
          <Route
            path={route.path}
            element={
              route.auth || route.public ? (
                route.element
              ) : (
                <ProtectedRoute>{route.element}</ProtectedRoute>
              )
            }
            key={route.path}
          />
        );
      })}
    </Routes>
  );
}

export default Routing;
