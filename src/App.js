import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>,
    },
    {
      path: "/signup",
      element: <SignupPage></SignupPage>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
