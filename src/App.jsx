import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard";

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
        // { path: "/dashboard/profile", element: <Profile /> },
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
