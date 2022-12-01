import { createTemplateModel, TemplateModel } from "../../Models";
import { TemplateTest } from "../../templates/template-test";
export type templateModelKeys = TemplateModel | {};
export interface TemplateCompModel {
  component: React.ComponentType<any>;
  modelConstructor: templateModelKeys;
}

const templateTesComponet: TemplateCompModel = {
  component: TemplateTest,
  modelConstructor: createTemplateModel(),
};
export const enum TemplateCodeEnum {
  templateTest = "templateTest",
}
export const templateCodeToComponentMap = new Map<
  TemplateCodeEnum,
  TemplateCompModel
>([[TemplateCodeEnum.templateTest, templateTesComponet]]);
