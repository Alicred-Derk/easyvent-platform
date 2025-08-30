import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchPage from "./SearchPage";
import LoginPage from "./LoginPage";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/search",
      element: <SearchPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
