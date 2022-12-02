import * as templates from "../../templates";
export type templateModelKeys = templates.TemplateModel | {};
export interface TemplateCompModel {
  component: React.ComponentType<any>;
  modelConstructor: templateModelKeys;
}

const templateTesComponet: TemplateCompModel = {
  component: templates.TemplateTest,
  modelConstructor: templates.createTemplateModel(),
};

const templateColorComp: TemplateCompModel = {
  component: templates.TemplateColor,
  modelConstructor: templates.createTemplateColorModel(),
};

export const enum TemplateCodeEnum {
  templateTest = "templateTest",
  templateColor = "TemplateColor",
}
export const templateCodeToComponentMap = new Map<
  TemplateCodeEnum,
  TemplateCompModel
>([
  [TemplateCodeEnum.templateTest, templateTesComponet],
  [TemplateCodeEnum.templateColor, templateColorComp],
]);
