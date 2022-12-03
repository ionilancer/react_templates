import {
  TemplateBaseModel,
  TemplateCodeEnum,
} from "../../model/template-base-model";

export interface PlayerTemplateModel extends TemplateBaseModel {}
export const createPlayerTemplateModel = (): PlayerTemplateModel => {
  return {
    code: TemplateCodeEnum.playerTemplate,
    name: "Player",
  };
};
