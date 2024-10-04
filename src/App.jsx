import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/dashboard/projects";
import Tasks from "./pages/dashboard/tasks";
import Services from "./pages/dashboard/services";
import Notifications from "./pages/dashboard/notifications";

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <RootLayout />,
    //   children: [
    //     { index: true, element: <Login /> },
    //     { path: "/forgot-password", element: <ForgotPassword /> },
    //     { path: "/signup", element: <Signup /> },
    //   ],
    // },

    {
      path: "/dashboard",
      element: (
        // <UserRoute>
          <DashboardLayout />
        // </UserRoute>
      ),
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/dashboard/projects", element: <Projects /> },
        { path: "/dashboard/tasks", element: <Tasks />},
        { path: "/dashboard/team", element: <Services />},
        { path: "/dashboard/notifications", element: <Notifications /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
