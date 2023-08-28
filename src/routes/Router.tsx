import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import MediaQuery from "../pages/responsivePage/mdiaQuery";
import Layout from "../components/layout";
import StyledComponent from "../pages/responsivePage/styledComponent";
import Sasss from "../pages/responsivePage/sasss";
import { Suspense, lazy } from "react";

const Counter = lazy(() => import("../components/counter"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage name={"lee"} />} />
          <Route path="/responsive">
            <Route path="mediaquery" element={<MediaQuery />} />
            <Route path="styledcomponent" element={<StyledComponent />} />
            <Route path="sasss" element={<Sasss />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route
            path="/counter"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Counter />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
