import React, { Children } from "react";
import { Median } from "../../Layout/Median/Median";
import App from "../../../App";
import { Navigate } from "react-router-dom";
import { AuthLogin } from "../AuthComponents/AuthLogin/AuthLogin";


export const RouterElements = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Median />,
      },
      {
        path: "/login",
        element: <AuthLogin />,
      },
    ],
  },
];
