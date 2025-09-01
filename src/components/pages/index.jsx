import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchPage from "./SearchPage";
import LoginPage from "./LoginPage";
import BookService from "./BookService";
import BookHotel from "./BookHotel";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/easyvent-platform/search",
      element: <SearchPage />
    },
    {
      path: "/easyvent-platform/login",
      element: <LoginPage />
    },
    {
      path: "/easyvent-platform/servicebook",
      element: <BookService />
    },
    {
      path: "/easyvent-platform/servicehotel",
      element: <BookHotel />
    },
    {
      path: "/easyvent-platform/*",
      element: <LandingPage />,
    },
    {
      path: "/",
      element: <LandingPage />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
