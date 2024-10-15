import * as React from "react";
import { paths } from "./path";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detail from "../../pages/detail";
import Gallery from "../../pages/gallery";

const Router: React.FC = () => {
  return (
    <BrowserRouter basename="Photo_Gallery">
      <Routes>
        <Route path={paths.GALLERY} element={<Gallery />} />
        <Route path={paths.PHOTO_DETAIL} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
