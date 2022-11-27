import {
  TemplateCodeEnum,
  templateCodeToComponentMap,
} from "./mappers/templateCodeToComponent";

interface getTemplateResoponse {
  component?: () => JSX.Element;
  template: React.ComponentType<any>;
}

export const getTemplate = (_templateCode: string): getTemplateResoponse => {
  const component = templateCodeToComponentMap.get(
    _templateCode as unknown as TemplateCodeEnum
  ) as React.ComponentType<any>;

  return {
    template: component,
  };
};
