export interface TemplateBaseModel {
  code: string;
  name: string;
}
export const createTemplateBaseModel = (): TemplateBaseModel => {
  return {
    code: "",
    name: "",
  };
};
