import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout />,
  //     children: [
  //       { index: true, element: <Login /> },
  //       { path: "/forgot-password", element: <ForgotPassword /> },
  //       { path: "/signup", element: <Signup /> },
  //     ],
  //   },

  //   {
  //     path: "/dashboard",
  //     element: (
  //       <UserRoute>
  //         <DashboardLayout user={user} />
  //       </UserRoute>
  //     ),
  //     children: [
  //       { index: true, element: <Dashboard /> },
  //       { path: "/dashboard/profile", element: <Profile /> },
  //     ],
  //   },
  // ]);
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <h1 className="section-header">Gorilla Dashboard</h1>
    </>
  );
}

export default App;
