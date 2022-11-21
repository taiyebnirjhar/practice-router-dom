import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Kanban from "../Pages/Kanban/Kanban";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "/home/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/home/kanban",
            element: <Kanban />,
          },
        ],
      },
      {
        path: "/about",
        element: <div>hello about</div>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
