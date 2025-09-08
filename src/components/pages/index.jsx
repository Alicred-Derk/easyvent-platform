import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import SearchPage from "./SearchPage";
import LoginPage from "./LoginPage";
import BookService from "./BookService";
import BookHotel from "./BookHotel";
import CreateAccount from "./CreateAccount";
import ProfileSetup from "./ProfileSetup";
import Dashboard from "./Dashboard";
import Services from "./Dashboard/components/Services";
import Bookings from "./Dashboard/components/Bookings";
import Messages from "./Dashboard/components/Messages";
import Profile from "./Dashboard/components/Profile";
import ServiceForm from "./Dashboard/components/Services/form/ServiceForm";
import ServiceDetails from "./Dashboard/components/Services/components/ServiceDetails";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/easyvent-platform/dashboard/",
      element: <Dashboard />,
      children: [
        {
          path: "services",
          element: <Services />
        },
        {
          path: "services/form",
          element: <ServiceForm />
        },
        {
          path: "services/details",
          element: <ServiceDetails />
        },
        {
          path: "bookings",
          element: <Bookings />
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "messages",
          element: <Messages />
        },
      ]
    },
    {
      path: "/easyvent-platform/search",
      element: <SearchPage />
    },
    {
      path: "/easyvent-platform/login",
      element: <LoginPage />
    },
    {
      path: "/easyvent-platform/signup",
      element: <CreateAccount />,
    },
    {
      path: "/easyvent-platform/signup/profile",
      element: <ProfileSetup />,
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
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
