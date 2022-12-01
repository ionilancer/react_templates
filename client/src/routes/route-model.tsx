import { Route } from "react-router-dom";
import { Home, TemplatePage, SorryPage } from "../pages";

export type routerTypeKey = JSX.Element;
interface ControlsMap {
  [key: string]: routerTypeKey;
}

export const elements2: ControlsMap = {
  "/": <Home />,
  "/template/:templateCode": <TemplatePage />,
  "/sorry": <SorryPage />,
};

export const createRouteDefault = () => {
  return Object.keys(elements2).map(
    (key: string) =>
      (
        <Route path={key} element={elements2[key]} key={key} />
      ) as React.ReactElement
  );
};

/**
 * with T
 */
const enum routerPathEnum {
  home = "/",
  template = "/template/:templateCode",
  sorry = "/sorry",
}
interface IRoute<T> {
  path: routerPathEnum;
  element: T;
}

export const defaultRoutes: IRoute<routerTypeKey>[] = [
  {
    path: routerPathEnum.home,
    element: <Home />,
  },
  {
    path: routerPathEnum.template,
    element: <TemplatePage />,
  },
  {
    path: routerPathEnum.sorry,
    element: <SorryPage />,
  },
];
export const createRoute = () => {
  return defaultRoutes.map((router) => (
    <Route path={router.path} element={router.element} key={router.path} />
  ));
};
