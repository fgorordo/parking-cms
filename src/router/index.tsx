import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Under construction</div>
    },
    {
      path: "/manage",
      element: <DashboardLayout />,
    },
  ]);