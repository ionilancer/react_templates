import * as templates from "..";
import { TemplateCodeEnum } from "../model/template-base-model";
export type templateModelKeys =
  | templates.TemplateModel
  | templates.PlayerTemplateModel;

export interface TemplateCompModel<T> {
  component: React.ComponentType<any>;
  modelConstructor: T;
}

const templateTesComponet: TemplateCompModel<templates.TemplateModel> = {
  component: templates.TemplateTest,
  modelConstructor: templates.createTemplateModel(),
};

const templateColorComp: TemplateCompModel<templates.PlayerTemplateModel> = {
  component: templates.PlayerTemplate,
  modelConstructor: templates.createPlayerTemplateModel(),
};

export const templateCodeToComponentMap = new Map<
  TemplateCodeEnum,
  TemplateCompModel<templateModelKeys>
>([
  [TemplateCodeEnum.templateTest, templateTesComponet],
  [TemplateCodeEnum.playerTemplate, templateColorComp],
]);
