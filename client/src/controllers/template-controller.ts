import { DefaultComponent } from "../components/default/defaults";
import {
  TemplateCodeEnum,
  templateCodeToComponentMap,
  TemplateCompModel,
  templateModelKeys,
} from "./mappers/templateCodeToComponentMap";

interface getTemplateResoponseModel {
  modelConstructor: templateModelKeys;
  component: React.ComponentType<any>;
}
export const creategGetTemplateResoponseModel =
  (): getTemplateResoponseModel => {
    return {
      component: DefaultComponent,
      modelConstructor: {},
    };
  };
export const getTemplate = async (
  templateCode: string
): Promise<getTemplateResoponseModel> => {
  const componentMapped = templateCodeToComponentMap.get(
    templateCode as TemplateCodeEnum
  ) as TemplateCompModel;
  if (!componentMapped) throw new Error("Template not found");
  return {
    component: componentMapped.component,
    modelConstructor: componentMapped.modelConstructor,
  };
};
