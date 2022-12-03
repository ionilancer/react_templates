import { Route } from "react-router-dom";
import { Home, TemplatePage, SorryPage } from "../pages";

interface RoutesCmponentModel {
  [key: string]: JSX.Element;
}

export const routeEnumToCompone: RoutesCmponentModel = {
  "/": <Home />,
  "/template/:templateCode": <TemplatePage />,
  "/sorry": <SorryPage />,
};

export const createRouteDefault = () => {
  return Object.keys(routeEnumToCompone).map(
    (key: string) =>
      (
        <Route path={key} element={routeEnumToCompone[key]} key={key} />
      ) as React.ReactElement
  );
};
