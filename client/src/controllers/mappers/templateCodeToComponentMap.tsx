import { createTemplateModel } from "../../Models";
import { TemplateTest } from "../../templates/template-test";

export interface TemplateCompModel {
  component: React.ComponentType<any>;
  modelConstructor: any;
}
const templateTesComponet: TemplateCompModel = {
  component: TemplateTest,
  modelConstructor: createTemplateModel,
};

export const enum TemplateCodeEnum {
  templateTest = "templateTest",
}
export const templateCodeToComponentMap = new Map<
  TemplateCodeEnum,
  TemplateCompModel
>([[TemplateCodeEnum.templateTest, templateTesComponet]]);
