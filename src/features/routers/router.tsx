import * as React from "react";
import { paths } from "./path";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "../../pages/detail";
import Gallery from "../../pages/gallery";

const Router: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: paths.GALLERY,
          element: <Gallery />,
        },
        {
          path: paths.PHOTO_DETAIL,
          element: <Detail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
