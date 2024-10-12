/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import Landing from "../pages/Landing";

const lazyLoad = (importFunction: any) => {
  const Component = lazy(importFunction);
  return (props: any) => (
    <Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </Suspense>
  );
};

const DisclaimerComponent = lazyLoad(() => import("../pages/Disclaimer"));

export function LazyRouter() {
  return (
    <Routes>
      <Route path={paths.landing} element={<Landing />} />
      <Route path={paths.disclaimer} element={<DisclaimerComponent />} />
    </Routes>
  );
}
