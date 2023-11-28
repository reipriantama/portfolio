import { Navigate } from "react-router";
import LandingPage from "../pages/LandingPage/LandingPage";

const routes = [
  {
    path: "",
    element: <Navigate to="/landing-page" />,
  },
  {
    path: "landing-page",
    element: <LandingPage />,
  },
];

export { routes };
