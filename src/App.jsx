// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/home";
import SEO from "./components/SEO";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
