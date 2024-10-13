import * as React from "react";
import { paths } from "./path";
import { createBrowserRouter, HashRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Detail from "../../pages/detail";
import Gallery from "../../pages/gallery";

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={paths.GALLERY} element={<Gallery />} />
        <Route path={paths.PHOTO_DETAIL} element={<Detail />} />
      </Routes>
    </HashRouter>
  );
};
export default Router;
