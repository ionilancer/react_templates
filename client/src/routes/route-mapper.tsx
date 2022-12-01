import React from "react";
import { Routes } from "react-router-dom";
import { createRouteDefault } from "./route-model";

export const RouterMapper = () => {
  return (
    <>
      <Routes>{createRouteDefault()}</Routes>
    </>
  );
};
