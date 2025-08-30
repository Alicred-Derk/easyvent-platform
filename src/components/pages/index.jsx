import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchPage from "./SearchPage";
import LoginPage from "./LoginPage";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/easyvent-platform/",
      element: <LandingPage />,
    },
    {
      path: "/easyvent-platform/search",
      element: <SearchPage />
    },
    {
      path: "/easyvent-platform/login",
      element: <LoginPage />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
