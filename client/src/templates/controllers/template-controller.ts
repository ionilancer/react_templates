import { DefaultComponent } from "../../components/default/defaults";
import {
  templateCodeToComponentMap,
  TemplateCompModel,
  templateModelKeys,
} from "../mappers/templateCodeToComponentMap";
import { TemplateCodeEnum } from "../model/template-base-model";

interface getTemplateResoponseModel {
  modelConstructor: templateModelKeys;
  component: React.ComponentType<any>;
}
export const creategGetTemplateResoponseModel =
  (): getTemplateResoponseModel => {
    return {
      component: DefaultComponent,
      modelConstructor: { code: "", name: "" },
    };
  };
export const getTemplate = async (
  templateCode: string
): Promise<getTemplateResoponseModel> => {
  const componentMapped = templateCodeToComponentMap.get(
    templateCode as TemplateCodeEnum
  ) as TemplateCompModel<templateModelKeys>;
  if (!componentMapped) throw new Error("Template not found");
  return {
    component: componentMapped.component,
    modelConstructor: componentMapped.modelConstructor,
  };
};
export const getTemplateList = async (): Promise<
  getTemplateResoponseModel[]
> => {
  const templateArr: TemplateCompModel<templateModelKeys>[] = [];
  const keys1 = Object.keys(TemplateCodeEnum);
  keys1.forEach((templateItem) => {
    const tamplete = templateCodeToComponentMap.get(
      templateItem as TemplateCodeEnum
    ) as TemplateCompModel<templateModelKeys>;
    templateArr.push(tamplete);
  });
  if (!templateArr.length) throw new Error("Template not found");
  return templateArr;
};
