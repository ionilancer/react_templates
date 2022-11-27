import { TemplateModel } from "../../Models";
import { TemplateTest } from "../../templates/template-test";

export const enum TemplateCodeEnum {
  templateTest = "templateTest",
}
export const templateCodeToComponentMap = new Map<
  TemplateCodeEnum,
  React.ComponentType<TemplateModel>
>([[TemplateCodeEnum.templateTest, TemplateTest]]);
