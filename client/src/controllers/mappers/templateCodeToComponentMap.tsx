import * as templates from "../../templates";
export type templateModelKeys =
  | templates.TemplateModel
  | templates.TemplateColorModel;

export interface TemplateCompModel<T> {
  component: React.ComponentType<any>;
  modelConstructor: T;
}

const templateTesComponet: TemplateCompModel<templates.TemplateModel> = {
  component: templates.TemplateTest,
  modelConstructor: templates.createTemplateModel(),
};

const templateColorComp: TemplateCompModel<templates.TemplateColorModel> = {
  component: templates.TemplateColor,
  modelConstructor: templates.createTemplateColorModel(),
};

export enum TemplateCodeEnum {
  templateTest = "templateTest",
  templateColor = "templateColor",
}
export const templateCodeToComponentMap = new Map<
  TemplateCodeEnum,
  TemplateCompModel<templateModelKeys>
>([
  [TemplateCodeEnum.templateTest, templateTesComponet],
  [TemplateCodeEnum.templateColor, templateColorComp],
]);
