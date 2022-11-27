import { DefaultComponent } from "../components/default/defaults";
import {
  TemplateCodeEnum,
  templateCodeToComponentMap,
  TemplateCompModel,
} from "./mappers/templateCodeToComponentMap";

interface getTemplateResoponseModel {
  modelConstructor: any;
  component?: React.ComponentType<any>;
}
export const creategGetTemplateResoponseModel =
  (): getTemplateResoponseModel => {
    return {
      component: DefaultComponent,
      modelConstructor: () => {},
    };
  };
export const getTemplate = async (
  _templateCode: string
): Promise<getTemplateResoponseModel> => {
  const componentMapped = templateCodeToComponentMap.get(
    _templateCode as unknown as TemplateCodeEnum
  ) as TemplateCompModel;
  if (!componentMapped) throw "Template not found";
  return {
    component: componentMapped.component,
    modelConstructor: componentMapped.modelConstructor,
  };
};
