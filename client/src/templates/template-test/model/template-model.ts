import {
  TemplateBaseModel,
  TemplateCodeEnum,
} from "../../model/template-base-model";
export interface TemplateModel extends TemplateBaseModel {}
export const createTemplateModel = (): TemplateModel => {
  return {
    code: TemplateCodeEnum.templateTest,
    name: "Test template",
  };
};
